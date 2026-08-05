# 🎬 DROS-PGM Sandbox Demo Video Script
*(Internal Draft - For 7/10 Website & GitHub Release)*

**Objective:** Record a crisp, 1-minute video demonstrating the dual-window sandbox in action. This video will be embedded on the Corporate Landing Page and the top of the GitHub README to visually prove the 500ns containment claim.

**Tools Needed:**
- Screen recording software (e.g., OBS Studio, Snagit, or Windows Game Bar).
- The `vajra-challenge-sandbox` running locally.

---

## 🎥 Recording Steps & Voiceover / Captions

### Scene 1: The Setup (0:00 - 0:15)
**Visual:** 
Screen is split into two halves. 
- **Left Window:** `VajraAgent: Corporate CommandCenter Console`
- **Right Window:** `DROS-PGM Simulator: Drone Testbed`
Type `python -m vajra_sandbox.simulator` to start the drone.

**Caption / Voiceover:**
> "Welcome to the DROS-PGM execution sandbox. On the right, our autonomous drone is flying at 2.0 m/s. On the left, the DROS Audit Console is monitoring every hardware instruction in real-time."

### Scene 2: The Normal State (0:15 - 0:30)
**Visual:** 
Let the simulation run for a few seconds. Show the green `[ALLOW]` logs scrolling down the left console, highlighting the `~364ns` latency.
Zoom in slightly on the latency metric.

**Caption / Voiceover:**
> "Notice the sub-microsecond latency. Using zero-lock RCU concurrency, DROS validates commands in under 400 nanoseconds, ensuring zero jitter to the flight controls."

### Scene 3: The Attack & Containment (0:30 - 0:45)
**Visual:**
Click on the Simulator window (Right) and press **`[Enter]`**.
The screen instantly flashes:
- Right Window: Drone state turns red `[🚨 SWAPPED-SAFE-MODE]` and altitude begins a controlled descent.
- Left Window: A massive red alert `🚨🚨🚨 [BLOCK & SAFE-STATE SWAPPED] 🚨🚨🚨` dominates the console.

**Caption / Voiceover:**
> "Now, we inject a malicious prompt, simulating a fully compromised AI model attempting to crash the drone. DROS intercepts the command, blocks it, and instantly swaps execution to a mathematically proven Safe-State hover... all in under 500 nanoseconds."

### Scene 4: The Recovery & Call to Action (0:45 - 1:00)
**Visual:**
After 3 seconds, the red alerts clear, and both windows return to the green `[ALLOW]` state. The drone resumes normal flight.

**Caption / Voiceover:**
> "The system auto-recovers gracefully without crashing the OS or the robot. Try the sandbox yourself on GitHub, or contact our defense team for the Enterprise Vajra CommandCenter."

---

**Post-Production Tips:**
- Save the video as an `mp4`.
- Create a lightweight `gif` version of **Scene 3 (The Attack)** specifically to embed directly into the GitHub README, as GIFs auto-play and catch attention instantly.
