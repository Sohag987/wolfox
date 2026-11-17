import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SNIPPETS = [
    {
        id: 'ai-workflows',
        tab: 'ai_agent.py',
        tag: 'AI & n8n Engine',
        code: `# WolFoxLab Autonomous Agent Architecture
import { OpenAI, n8nPipeline } from 'wolfox-core'

agent = n8nPipeline.create_agent(
    model="gpt-4o",
    tools=["crm_sync", "data_enrichment", "lead_scoring"]
)

@agent.on_event("new_inquiry")
async def execute_growth_flow(data):
    analysis = await agent.evaluate_intent(data)
    await n8nPipeline.dispatch("close_lead", payload=analysis)
    return {"status": "10x_acceleration", "automated": True}`
    },
    {
        id: 'custom-software',
        tab: 'engine.tsx',
        tag: 'Bespoke Software',
        code: `// WolFoxLab Enterprise Engine
import { createSolution, ScalableCluster } from '@wolfox/platform';

export const CoreSolution = createSolution({
  client: "Enterprise Global",
  stack: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
  security: "Zero-Trust Encrypted",
  performance: {
    lighthouse: 99,
    edgeLatencyMs: 14,
    uptimeSLA: "99.99%"
  }
});`
    },
    {
        id: 'growth-seo',
        tab: 'growth.ts',
        tag: 'SEO & Viral Growth',
        code: `// Autonomous SEO & High-Retention Pipelines
const growthPipeline = new WolfoxGrowthEngine({
  targets: ["boibondhu.xyz", "good-choice.shop"],
  keywords: "auto-discovered",
  indexing: "instant-google-api",
  reelsAutomation: {
    clipsPerWeek: 14,
    viralScoring: 0.94
  }
});
await growthPipeline.deploy();`
    }
];

export const HeroCodeConsole = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [logs, setLogs] = useState([]);
    const [copied, setCopied] = useState(false);

    const handleRun = () => {
        setIsRunning(true);
        setLogs([]);

        setTimeout(() => {
            setLogs((prev) => [...prev, '⚡ [WOLFOX-KERNEL] Initializing autonomous container...']);
        }, 150);

        setTimeout(() => {
            setLogs((prev) => [
                ...prev,
                `✓ Loaded module: ${SNIPPETS[activeTab].tab} (optimized)`
            ]);
        }, 400);

        setTimeout(() => {
            setLogs((prev) => [
                ...prev,
                '🚀 Executed in 12ms — 0 errors, 100% throughput verified'
            ]);
            setIsRunning(false);
        }, 750);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(SNIPPETS[activeTab].code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            className="hero-code-hud"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Window Header */}
            <div className="code-hud-header">
                <div className="code-hud-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                </div>

                {/* Tabs */}
                <div className="code-hud-tabs">
                    {SNIPPETS.map((snippet, idx) => (
                        <button
                            key={snippet.id}
                            type="button"
                            className={`code-hud-tab ${activeTab === idx ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab(idx);
                                setLogs([]);
                            }}
                        >
                            <span>{snippet.tab}</span>
                        </button>
                    ))}
                </div>

                {/* Copy & Badge */}
                <div className="code-hud-actions">
                    <button
                        type="button"
                        className="code-copy-btn"
                        onClick={handleCopy}
                        title="Copy code"
                    >
                        {copied ? (
                            <span className="copy-success">✓ Copied</span>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Code Body */}
            <div className="code-hud-body">
                <AnimatePresence mode="wait">
                    <motion.pre
                        key={activeTab}
                        className="code-content-block"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <code>{SNIPPETS[activeTab].code}</code>
                    </motion.pre>
                </AnimatePresence>
            </div>

            {/* Console Footer / Execution Toolbar */}
            <div className="code-hud-footer">
                <div className="code-hud-status">
                    <span className="pulse-green-dot" />
                    <span className="hud-status-text">WolFox Kernel 2.4 &bull; Active</span>
                </div>

                <div className="code-hud-run-wrap">
                    <motion.button
                        type="button"
                        className={`code-run-btn ${isRunning ? 'running' : ''}`}
                        onClick={handleRun}
                        disabled={isRunning}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isRunning ? (
                            <>
                                <span className="btn-spinner" />
                                <span>Running...</span>
                            </>
                        ) : (
                            <>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                                <span>Test Pipeline</span>
                            </>
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Live Terminal Output Feed */}
            {logs.length > 0 && (
                <motion.div
                    className="code-hud-logs"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    {logs.map((log, i) => (
                        <div key={i} className="log-line">
                            {log}
                        </div>
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
};

export default HeroCodeConsole;
