#!/usr/bin/env node
// Usage: node kill-port.mjs <port>
import { execSync } from 'node:child_process';

const ports = process.argv.slice(2);
if (ports.length === 0) {
  process.exit(1);
}
for (const port of ports) {
  try {
    // macOS and Linux: lsof
    const output = execSync(`lsof -i :${port} -t`, { encoding: 'utf8' });
    const pids = output.split('\n').filter(Boolean);
    if (pids.length === 0) {
      continue;
    }
    for (const pid of pids) {
      execSync(`kill -9 ${pid}`);
    }
  } catch (err) {
    if (err.status === 1) {
      // No process found
    }
  }
}
