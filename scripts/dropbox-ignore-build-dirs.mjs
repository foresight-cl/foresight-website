/**
 * Marks build output dirs (.next, out) with the com.dropbox.ignored NTFS
 * stream so Dropbox does not sync them. Without this, Dropbox holds file
 * handles mid-sync and the next `next build` fails with EPERM on Windows.
 * No-op outside Windows or when the project lives outside a Dropbox folder.
 * Runs automatically via the postbuild npm hook.
 */
import { execFileSync } from "child_process";
import { existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");

if (process.platform === "win32" && /dropbox/i.test(rootDir)) {
  for (const dir of [".next", "out"]) {
    const target = join(rootDir, dir);
    if (!existsSync(target)) continue;
    try {
      execFileSync("powershell.exe", [
        "-NoProfile",
        "-NonInteractive",
        "-Command",
        `Set-Content -Path '${target}' -Stream com.dropbox.ignored -Value 1`,
      ]);
      console.log(`Marked ${dir}/ as Dropbox-ignored`);
    } catch {
      console.warn(`Could not mark ${dir}/ as Dropbox-ignored (non-fatal)`);
    }
  }
}
