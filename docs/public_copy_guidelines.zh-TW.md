# DROS 官網公開文案準則

本文件定義 DROS / VajraClaw 官網對外公開內容的共同寫作原則，供所有接手的 Agent、編輯、審核者與協作人員遵守。

## 1. 核心定位

- DROS 是 execution-governance substrate，不是通用型 AI 安全套件。
- C-ABI 是主要防線。
- Enterprise、Swarm、Trust、Pricing 等頁面可以描述強化層，但不能暗示萬用或絕對保護。
- 所有公開文案都必須與目前的白皮書證據狀態一致。

## 1.1 流程順序

所有新測試、新實驗、新成果，都必須遵循以下發布順序：

1. 先對齊白皮書。
2. 再映射到對應的商品頁或 tier。
3. 最後才進入官網公開文案，且必須完成邊界收斂後才能發布。

這個順序可以避免官網或商品文案跑在白皮書證據狀態前面。

## 2. 寫作總則

### 2.1 避免絕對化
不要使用暗示邊界外也成立的詞語。

避免：
- 100%
- 絕對
- 永遠
- 從不
- 保證 / guaranteed
- 完美 / flawless
- 完全 / completely
- 通用 / universal
- 零責任 / zero liability
- 完美無缺
- 不可能失敗
- 自我毀滅 / self-destruct
- 全包式 / all-in-one

優先使用：
- 有界 / bounded
- 已記錄 / documented
- 在文件化邊界內
- 顯著降低
- 支援 / supports
- 有助於 / helps
- 不預期 / not expected
- 在所述條件下穩定
- 降低 / reduced
- 可減少 / materially reduce

### 2.2 句子必須帶邊界
任何安全、效能、覆蓋率或阻斷率的說法，都要附帶至少一項：
- 部署條件
- 測試情境
- artifact / 報告引用
- 邊界描述
- 適用範圍

範例：
- 好："在文件化邊界內顯著降低 bypass 風險。"
- 好："此數字來自本地測試，條件如文內所述。"
- 不好："這能消除所有風險。"
- 不好："這保證安全。"

### 2.3 數字要有上下文
數字不能單獨出現成為普遍結論。
每個數字都應搭配：
- 測試類型
- 樣本數
- 硬體或環境
- artifact 或報告引用
- 邊界註解

若證據仍在 Pending，就明確標示 Pending。

### 2.4 中英文強度一致
- 中文與英文必須表達相同強度。
- 不能英文比較強，中文比較弱，或反過來。
- 同一頁的語氣要一致。

### 2.5 採用基礎設施語氣
官網文字應偏向基礎設施、治理、系統工程，而非行銷誇張。

建議用語：
- governance substrate
- execution boundary
- reinforcement layer
- bounded protection
- artifact-backed
- documented boundary
- on-premise validation
- local enforcement

## 3. 各頁面寫作方向

### Home
- Hero 與統計卡避免硬百分比，除非有最新且可引用的 benchmark。
- 請優先用 bounded、documented、reviewed 類語氣。

### Enterprise
- 不要寫「零停機」、「零波及」、「100% air-gapped」這種絕對式說法。
- 改寫成 air-gapped capable、offline-supported、low-bypass-risk within the documented boundary。

### Swarm / Physical AI
- 不要聲稱不可能的運動學或安全保證。
- 用 reduce risk、limit propagation、target near-zero breach margin within the boundary。
- 飛控與機器人敘述要保守且明確標示測試條件。

### Trust
- benchmark mockup 應看起來像證據，不像產品保證。
- 若沒有真實 artifact，不要寫成已完成驗證。
- 可用 PASS、reviewed、bounded，但前提是事實上有對應證據。

### Docs / FAQ / Pricing
- 這些頁面最容易過度宣稱，必須特別保守。
- 避免 fully prevents、always blocks、never leaks 這類絕對說法。
- 優先解釋邊界與機制，不要承諾完美結果。

## 4. 證據層級

建議採用以下層級：

- Pending：證據尚未完整，或尚未公開。
- Stated：只是在 README、草稿或內部說明中提到。
- Reviewed：有人已人工看過。
- Verified：有原始 artifact、hash 與上下文，可支持該說法。

除非原始 artifact 與上下文齊全，否則不要寫成 Verified。

## 5. 安全改寫範式

如果句子太強，就用以下方式降調：

- 原句："DROS guarantees zero bypass."
- 改寫："DROS is designed to reduce bypass risk within the documented enforcement boundary."

- 原句："The system is completely air-gapped."
- 改寫："The system supports air-gapped deployment modes."

- 原句："This eliminates privilege escalation."
- 改寫："This materially reduces privilege escalation risk under the stated deployment model."

## 6. 發布前檢查

發佈前請自問：
- 這句話是否暗示了邊界外也成立？
- 是否超過目前證據狀態？
- 是否仍保留 C-ABI 主防線定位？
- 中英文是否等強度？
- 如果被嚴格審稿，這句是否會被視為過度宣稱？

若答案是 yes，就降調。

## 7. 預設原則

不確定時：
- 降低宣稱強度
- 加上邊界
- 補上上下文
- 保持措辭精準而克制

這是官網公開文案，不是內部喊話。
