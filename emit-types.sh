#!/usr/bin/env bash
set -e

rm -f src/*.d.ts
npx typescript src/*.js --declaration --allowJs --emitDeclarationOnly
rm -f src/*.test.d.ts

