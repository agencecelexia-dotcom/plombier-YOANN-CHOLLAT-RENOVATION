import { promises as fsp } from "fs";
import fs from "fs";
import path from "path";

const STORAGE_DIR = path.join(process.cwd(), "storage");
const ANALYTICS_FILE = path.join(STORAGE_DIR, "analytics.json");
const SUBMISSIONS_FILE = path.join(STORAGE_DIR, "submissions.json");

const MAX_EVENTS = 10000;

async function ensureFile(filePath: string) {
  try {
    await fsp.access(filePath);
  } catch {
    await fsp.mkdir(path.dirname(filePath), { recursive: true });
    await fsp.writeFile(filePath, "[]", "utf-8");
  }
}

// --- Analytics ---

export interface AnalyticsEvent {
  type: string;
  page: string;
  referrer?: string;
  element?: string;
  timestamp: string;
  userAgent?: string;
}

export async function getAnalyticsEvents(): Promise<AnalyticsEvent[]> {
  await ensureFile(ANALYTICS_FILE);
  const raw = await fsp.readFile(ANALYTICS_FILE, "utf-8");
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function saveAnalyticsEvent(event: AnalyticsEvent): Promise<void> {
  const events = await getAnalyticsEvents();
  events.push(event);
  const trimmed = events.slice(-MAX_EVENTS);
  await fsp.writeFile(ANALYTICS_FILE, JSON.stringify(trimmed, null, 2), "utf-8");
}

// --- Submissions ---

export interface Submission {
  id: string;
  nom: string;
  telephone: string;
  email: string;
  service: string;
  message: string;
  date: string;
  status: "new" | "read" | "done";
}

export async function getSubmissions(): Promise<Submission[]> {
  await ensureFile(SUBMISSIONS_FILE);
  const raw = await fsp.readFile(SUBMISSIONS_FILE, "utf-8");
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function saveSubmission(submission: Submission): Promise<void> {
  const submissions = await getSubmissions();
  submissions.unshift(submission);
  await fsp.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), "utf-8");
}

export async function updateSubmission(id: string, updates: Partial<Submission>): Promise<Submission | null> {
  const submissions = await getSubmissions();
  const index = submissions.findIndex((s) => s.id === id);
  if (index === -1) return null;
  submissions[index] = { ...submissions[index], ...updates };
  await fsp.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), "utf-8");
  return submissions[index];
}

export async function deleteSubmission(id: string): Promise<boolean> {
  const submissions = await getSubmissions();
  const filtered = submissions.filter((s) => s.id !== id);
  if (filtered.length === submissions.length) return false;
  await fsp.writeFile(SUBMISSIONS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

// --- Generic storage (services, projects, testimonials) ---

export function readData<T>(filename: string, defaultData: T): T {
  const filepath = path.join(STORAGE_DIR, filename);
  try {
    if (fs.existsSync(filepath)) {
      return JSON.parse(fs.readFileSync(filepath, "utf-8"));
    }
  } catch {
    // fallback to default
  }
  return defaultData;
}

export function writeData<T>(filename: string, data: T): void {
  if (!fs.existsSync(STORAGE_DIR)) {
    fs.mkdirSync(STORAGE_DIR, { recursive: true });
  }
  fs.writeFileSync(
    path.join(STORAGE_DIR, filename),
    JSON.stringify(data, null, 2)
  );
}
