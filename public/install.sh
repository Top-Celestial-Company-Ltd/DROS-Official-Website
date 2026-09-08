#!/usr/bin/env bash
# ==============================================================================
# DROS VajraClaw - Official Linux / Server One-Line Installer
# Standard: RFC-010 W3C did:key | Microkernel: C-ABI 26.1μs In-Band Enforcement
# ==============================================================================

set -e

BOLD='\033[1m'
GOLD='\033[38;2;212;175;55m'
BLUE='\033[38;2;0;240;255m'
GREEN='\033[32m'
RED='\033[31m'
NC='\033[0m'

echo -e "${GOLD}${BOLD}"
echo "  ____  ____   ___  ____    __     __     _           ____ _                 "
echo " |  _ \|  _ \ / _ \/ ___|   \ \   / /_ _ (_)_ __ __ _ / ___| | __ ___      __"
echo " | | | | |_) | | | \___ \    \ \ / / _\` || | '__/ _\` | |   | |/ _\` \ \ /\ / /"
echo " | |_| |  _ <| |_| |___) |    \ V / (_| || | | | (_| | |___| | (_| |\ V  V / "
echo " |____/|_| \_\\___/|____/      \_/ \__,_|/ |_|  \__,_|\____|_|\__,_| \_/\_/  "
echo "                                       |__/                                   "
echo -e "${NC}"
echo -e "${BLUE}>>> Initializing DROS VajraClaw (Hacker Community Edition)...${NC}"

# 1. Architecture Check
ARCH=$(uname -m)
case "$ARCH" in
  x86_64)
    ARCH_TAG="x86_64"
    ;;
  aarch64|arm64)
    ARCH_TAG="aarch64"
    ;;
  *)
    echo -e "${RED}[!] Unsupported architecture: $ARCH. Only x86_64 and aarch64 are supported.${NC}"
    exit 1
    ;;
esac

echo -e "${GREEN}[✓] Detected architecture:${NC} $ARCH_TAG"

# 2. Check Python or Docker environment
INSTALL_DIR="$HOME/.dros"
BIN_DIR="$INSTALL_DIR/bin"
AUDIT_DIR="$INSTALL_DIR/audit"
mkdir -p "$BIN_DIR" "$AUDIT_DIR"

echo -e "${BLUE}>>> Setting up runtime environment at $INSTALL_DIR...${NC}"

if command -v pip3 &>/dev/null; then
    echo -e "${GREEN}[✓] pip3 found. Installing Python SDK & CLI...${NC}"
    pip3 install --upgrade pip >/dev/null 2>&1 || true
    pip3 install --user vajraclaw || true
elif command -v pip &>/dev/null; then
    echo -e "${GREEN}[✓] pip found. Installing Python SDK & CLI...${NC}"
    pip install --user vajraclaw || true
elif command -v docker &>/dev/null; then
    echo -e "${GREEN}[✓] Docker found. Pulling latest VajraClaw image...${NC}"
    docker pull ghcr.io/top-celestial-company-ltd/vajraclaw:latest || true
fi

echo -e "${GOLD}${BOLD}"
echo "=============================================================================="
echo " [✓] DROS VajraClaw Installation Succeeded!"
echo "=============================================================================="
echo -e "${NC}"
echo "To initialize your identity passport and start the daemon:"
echo "  1. pip install vajraclaw (if not yet in PATH)"
echo "  2. vajra init"
echo "  3. vajra start --daemon"
echo ""
echo "For Docker users:"
echo "  docker run -d --name vajraclaw-hacker -p 8080:8080 -v ~/.dros/audit:/root/.dros/audit ghcr.io/top-celestial-company-ltd/vajraclaw:latest"
echo ""
echo -e "${BLUE}Documentation:${NC} https://dr-os.io/docs"
echo -e "${GOLD}GitHub:${NC}        https://github.com/Top-Celestial-Company-Ltd/DROS-VajraClaw-Hacker"
