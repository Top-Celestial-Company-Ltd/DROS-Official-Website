# 💼 DROS-PGM Corporate & Defense Tier - B2B Sales & Tech FAQ
*(Internal Draft - For July 10 Release)*

---

### Q1: How is DROS-PGM different from AI "Guardrails" or Prompt Engineering?
**A:** Traditional AI guardrails operate in the same "user-space" (or context window) as the AI model itself. If the AI hallucinates or is subjected to a jailbreak (prompt injection), it can simply bypass its own guardrails. 
**DROS-PGM is a physical-layer execution gate.** It operates completely outside the AI's awareness using **eBPF-inspired out-of-band kernel isolation**. The AI can hallucinate all it wants, but DROS mathematically prevents malicious hardware commands from reaching the physical actuators.

### Q2: Does the security check introduce latency? Robotic systems require real-time processing.
**A:** No. This is our core patent-pending innovation (U.S. Patent Application No. 64/111,973). Traditional software firewalls use Mutex locks which introduce unpredictable latency jitter. DROS-PGM utilizes a **lock-free, zero-dynamic-allocation execution enforcement** architecture. Our execution validation gate runs inline at the policy enforcement point, achieving an average latency of **`353 ns` (sub-microsecond)**, ensuring zero impact on your sensor fusion or flight control pipelines.

### Q3: What happens when the AI issues a dangerous command? Does the robot crash?
**A:** No. We utilize the **Simplex Architecture** for instantaneous Safe-State Swapping. If an unauthorized command is detected, DROS-PGM does not try to "debug" the AI. Instead, in less than 500ns, it physically swaps the execution pointer to a mathematically verifiable, pre-compiled safe state (e.g., Drone Hovering, Arm E-Stop, or Soft Landing). The AI remains compromised, but the hardware is safe.

### Q4: Can the AI rewrite the `policy.bin` file to give itself permissions?
**A:** No. The `policy.bin` is cryptographically signed using Ed25519 curves. DROS-PGM validates the signature in memory before every epoch. Furthermore, the DROS-PGM binary utilizes OS-level memory sealing (e.g., `memfd_create` with `F_ADD_SEALS` on Linux), making it immutable at runtime. Any attempt to modify it results in an immediate hardware-level halt.

### Q5: How do we manage thousands of DROS-PGM nodes in the field?
**A:** This is exactly what the **Corporate & Defense Tier** is designed for. While the open-source version requires manual policy loading, our Enterprise Tier includes the **Vajra CommandCenter Web GUI**. It allows you to:
1. Visualize your entire robotic fleet in real-time.
2. Push dynamic, KMS-rotated cryptographic policies over-the-air.
3. Issue a **Global Emergency Multicast Kill-Switch** that physically halts all compromised units within 1 millisecond.

### Q6: Do we have to send our telemetry or policies to DROS cloud servers?
**A:** Absolutely not. DROS-PGM is designed for Zero-Trust and Defense environments. The entire Corporate Tier, including the Web CommandCenter and the PKI Certificate Authority (CA), can be deployed **100% On-Premise and Air-Gapped**. You own your keys, your policies, and your data.
