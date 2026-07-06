#!/usr/bin/env bash
exec node "$(cd "$(dirname "$0")/.." && pwd)/devtools/inject.mjs" "${1:-citron}"
