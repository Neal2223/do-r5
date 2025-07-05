#!/usr/bin/env node
// Usage: node kill-port.mjs <port>
import { execSync } from 'child_process';

const ports = process.argv.slice(2);
if (ports.length === 0) {
  console.error('Usage: node kill-port.mjs <port1> [port2] [port3] ...');
  process.exit(1);
}

for (const port of ports) {
  try {
    // macOS and Linux: lsof
    const output = execSync(`lsof -i :${port} -t`, { encoding: 'utf8' });
    const pids = output.split('\n').filter(Boolean);
    if (pids.length === 0) {
      console.log(`No process found on port ${port}`);
      continue;
    }
    for (const pid of pids) {
      execSync(`kill -9 ${pid}`);
      console.log(`Killed process ${pid} on port ${port}`);
    }
  } catch (err) {
    if (err.status === 1) {
      // No process found
      console.log(`No process found on port ${port}`);
    } else {
      console.error(`Error killing process on port ${port}:`, err.message);
    }
  }
}

