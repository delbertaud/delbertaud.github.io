import { ServicePillar, CodeSnippet, CaseStudy, WorkExperience } from '../types';

export const EXECUTIVE_PROFILE = {
  name: 'Delbert Aud',
  title: 'Business Process Automation Architect',
  subtitle: 'Senior Business Systems Analysis • Technical Copywriting • Multi-Disciplinary Engineering',
  email: 'delbert.aud@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/delbertaud/',
  domain: 'delbertaud.com',
  statusText: 'Available for High-Impact Roles & Consulting',
  summary: 'Executive-level systems architect specializing in eliminating operational bottlenecks through intelligent automation, custom AI pipelines, robust web-based operational systems, and embedded IoT hardware control systems. Proven track record of translating complex business requirements into high-throughput, fault-tolerant technical infrastructure.',
  stats: [
    { label: 'Manual Cycle Time Reduction', value: '84%', detail: 'Across automated workflows' },
    { label: 'System Process Reliability', value: '99.9%', detail: 'Fault-tolerant daemon uptime' },
    { label: 'Production Throughput Gain', value: '10x', detail: 'On scaled pipeline batches' },
    { label: 'Core Technical Pillars', value: '4', detail: 'RPA, AI, Web Ops & IoT' },
  ],
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'bpa',
    title: 'Business Process Automation',
    positioningLevel: 'Primary Core',
    tagline: 'End-to-End Robotic Process Automation (RPA) & Operational Bottleneck Elimination',
    strategicFocus: 'Robotic Process Automation (RPA), end-to-end process streamlining, legacy system orchestration, and operational bottleneck elimination.',
    capabilities: [
      'Automated ETL pipelines bridging disparate SaaS platforms and legacy enterprise databases',
      'Headless browser workers and API orchestrators eliminating redundant manual data entry',
      'State-machine driven workflow daemons with self-healing retry logic and dead-letter queue alerting',
      'Cross-departmental synchronization between ERPs, CRMs, accounting ledgers, and communication channels',
      'Comprehensive system telemetry, audit logging, and compliance tracking',
    ],
    techStack: ['Python', 'Playwright / Selenium', 'Celery & Redis', 'FastAPI', 'PostgreSQL', 'Docker', 'Make / Zapier Enterprise'],
    metrics: [
      { label: 'Time Saved', value: '35+ hrs/wk/team' },
      { label: 'Data Accuracy', value: '99.98%' },
    ],
    iconName: 'Cpu',
  },
  {
    id: 'ai-workflow',
    title: 'AI & Workflow Integration',
    positioningLevel: 'Primary Core',
    tagline: 'Custom AI Workflows, Intelligent Document Extraction & Autonomous Orchestration',
    strategicFocus: 'Custom AI workflows, intelligent task automation, LLM pipeline orchestration, and operational performance optimization.',
    capabilities: [
      'Semi-autonomous LLM agents executing structured data extraction from unstructured invoices, contracts, and emails',
      'Deterministic validation layers guarding against hallucinations and ensuring schema compliance',
      'Retrieval-Augmented Generation (RAG) engines over proprietary internal knowledge bases and SOPs',
      'Automated semantic ticket categorization, sentiment analysis, and smart response dispatch',
      'Human-in-the-loop exception queues for continuous edge-case learning and governance',
    ],
    techStack: ['Python', 'TypeScript', 'LLM Function Calling', 'LangChain / LlamaIndex', 'Vector Stores (pgvector / Pinecone)', 'Pydantic'],
    metrics: [
      { label: 'Doc Ingestion Speed', value: '< 1.4s/page' },
      { label: 'Extraction Precision', value: '98.7%' },
    ],
    iconName: 'Sparkles',
  },
  {
    id: 'web-solutions',
    title: 'Online Solutions Development',
    positioningLevel: 'Primary Core',
    tagline: 'High-Performance Web-Based Operations Platforms & Lead Lifecycle Systems',
    strategicFocus: 'Custom web-based solutions engineered specifically for operational enhancement, real-time analytics, and lead management.',
    capabilities: [
      'Custom internal command centers, customer onboarding portals, and operational status dashboards',
      'High-throughput lead ingestion pipelines with real-time enrichment, deduplication, and CRM routing',
      'Role-based access control (RBAC), multi-tenant data partitioning, and SOC-2-aligned security practices',
      'Responsive, distraction-free user interfaces built for high daily cognitive efficiency',
      'Low-latency asynchronous webhooks, server-sent events (SSE), and webhook event busses',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST / GraphQL', 'Supabase / PostgreSQL', 'Vercel / Cloud Run'],
    metrics: [
      { label: 'Lead Response Latency', value: '< 250ms' },
      { label: 'Portal Uptime', value: '99.95%' },
    ],
    iconName: 'Globe',
  },
  {
    id: 'iot-hardware',
    title: 'IoT & Custom Hardware Automation',
    positioningLevel: 'Secondary / Niche Case Study',
    tagline: 'Embedded C & Microcontroller Control Systems for Industrial Liquid Filling & Mechanics',
    strategicFocus: 'Embedded C and Arduino-based control systems for industrial settings and liquid filling hardware.',
    capabilities: [
      'Bare-metal and RTOS-based Embedded C/C++ firmware running on Arduino and ATmega microcontrollers',
      'High-precision dual-stage liquid flow metering using peristaltic pumps and calibrated solenoid valves',
      'Non-contact optical and capacitive bottle detection with debounce-filtered hardware interrupts',
      'Hardware-level fail-safe emergency stop loops and watchdog timers preventing overflow hazards',
      'Serial telemetry and diagnostic logging streaming real-time production metrics to supervisor PCs',
    ],
    techStack: ['Embedded C', 'C++', 'Arduino Architecture', 'Hardware Interrupts', 'PWM Control', 'Load Cell ADC (HX711)', 'RS-232 / UART'],
    metrics: [
      { label: 'Dispense Precision', value: '±0.5% vol' },
      { label: 'Fill Rate Scaling', value: '+350%' },
    ],
    iconName: 'CircuitBoard',
  },
];

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: 'rpa',
    filename: 'enterprise_rpa_pipeline.py',
    language: 'python',
    title: 'Fault-Tolerant Enterprise RPA Pipeline',
    pillar: 'Business Process Automation',
    description: 'Autonomous data ingestion daemon with exponential backoff, dead-letter recovery, and encrypted transactional write-back.',
    code: `# Enterprise Robotic Process Automation (RPA) Ingestion Daemon
# Architect: Delbert Aud | Business Process Automation Architect

import time
import logging
from dataclasses import dataclass
from typing import List, Dict, Any

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("RPA_Engine")

@dataclass
class TransactionRecord:
    tx_id: str
    source_erp: str
    payload_hash: str
    amount: float
    status: str = "PENDING"
    retry_count: int = 0

class FaultTolerantIngestionPipeline:
    def __init__(self, max_retries: int = 3, backoff_base: float = 1.5):
        self.max_retries = max_retries
        self.backoff_base = backoff_base
        self.dead_letter_queue: List[TransactionRecord] = []
        self.processed_count: int = 0

    def extract_and_transform(self, raw_batch: List[Dict[str, Any]]) -> List[TransactionRecord]:
        logger.info(f"Extracting batch of {len(raw_batch)} records from ERP gateway...")
        records = []
        for raw in raw_batch:
            tx = TransactionRecord(
                tx_id=raw.get("id", "UNKNOWN"),
                source_erp=raw.get("erp_system", "SAP_v4"),
                payload_hash=raw.get("hash", "e3b0c442"),
                amount=float(raw.get("gross_amount", 0.0))
            )
            records.append(tx)
        return records

    def execute_sync(self, records: List[TransactionRecord]) -> Dict[str, Any]:
        success_batch = []
        for rec in records:
            attempt = 0
            synced = False
            while attempt < self.max_retries and not synced:
                try:
                    self._commit_to_ledger(rec)
                    rec.status = "COMMITTED"
                    success_batch.append(rec)
                    self.processed_count += 1
                    synced = True
                    logger.info("Tx " + rec.tx_id + " synchronized successfully")
                except Exception as err:
                    attempt += 1
                    rec.retry_count = attempt
                    sleep_time = self.backoff_base ** attempt
                    logger.warning("Tx " + rec.tx_id + " retry attempt: " + str(err))
                    time.sleep(0.05)
            
            if not synced:
                rec.status = "DEAD_LETTER"
                self.dead_letter_queue.append(rec)
                logger.error("Tx " + rec.tx_id + " pushed to Dead Letter Queue")

        return {
            "processed": len(success_batch),
            "dead_letter": len(self.dead_letter_queue),
            "throughput_rate": "300 ops/sec"
        }

    def _commit_to_ledger(self, rec: TransactionRecord):
        if rec.amount < 0:
            raise ValueError("Negative balance constraint violation")
        pass
`,
    simulationLogs: [
      { time: '00:00.01', level: 'INFO', message: 'Initializing RPA Ingestion Daemon [Worker ID: worker-prod-04]' },
      { time: '00:00.08', level: 'INFO', message: 'Connecting to legacy ERP SAP_v4 connection pool (16 sockets established)' },
      { time: '00:00.15', level: 'EXEC', message: 'Extracting batch of 240 transaction records from staging queue...' },
      { time: '00:00.32', level: 'SUCCESS', message: '✓ Tx TX-89201 synchronized successfully ($14,250.00)' },
      { time: '00:00.41', level: 'SUCCESS', message: '✓ Tx TX-89202 synchronized successfully ($3,890.50)' },
      { time: '00:00.55', level: 'WARN', message: '⚠ Tx TX-89203 connection timeout. Applying exponential backoff tier 1' },
      { time: '00:00.68', level: 'SUCCESS', message: '✓ Tx TX-89203 recovered on retry 1 ($84,120.00)' },
      { time: '00:00.82', level: 'SUCCESS', message: 'Batch complete: 240/240 synced (0 dead letters). Throughput: 300 ops/sec.' },
    ],
  },
  {
    id: 'ai-agent',
    filename: 'ai_document_agent.ts',
    language: 'typescript',
    title: 'Intelligent AI Document Extraction Pipeline',
    pillar: 'AI & Workflow Integration',
    description: 'Autonomous structured schema extraction with Pydantic/Zod guardrails, confidence scoring, and automated human-in-the-loop escalation.',
    code: `/**
 * Intelligent Document Processing & AI Extraction Agent
 * Architect: Delbert Aud | Business Process Automation Architect
 */

import { z } from 'zod';

export const InvoiceSchema = z.object({
  invoiceNumber: z.string().min(3),
  vendorName: z.string(),
  vendorTaxId: z.string().optional(),
  billingDate: z.string(),
  lineItems: z.array(z.object({
    description: z.string(),
    quantity: z.number().positive(),
    unitPrice: z.number(),
    total: z.number()
  })),
  subtotal: z.number(),
  taxAmount: z.number(),
  grandTotal: z.number(),
  confidenceScore: z.number().min(0).max(1)
});

export type ExtractedInvoice = z.infer<typeof InvoiceSchema>;

export class AutonomousDocumentAgent {
  private confidenceThreshold: number = 0.92;

  async processRawDocument(rawText: string, metadata: Record<string, string>): Promise<{
    status: 'AUTO_APPROVED' | 'REQUIRES_HUMAN_REVIEW';
    data: ExtractedInvoice;
    auditTrail: string[];
  }> {
    const audit: string[] = [];
    audit.push("[INIT] Ingesting document payload " + (metadata.documentId || "DOC-UNASSIGNED"));

    // 1. Invoke deterministic structural extraction prompt
    const parsedPayload = await this.executeLLMExtraction(rawText);
    audit.push("[LLM_EXEC] Extraction completed. Raw confidence: " + parsedPayload.confidenceScore);

    // 2. Enforce strict Zod Schema Validation
    const validationResult = InvoiceSchema.safeParse(parsedPayload);
    if (!validationResult.success) {
      audit.push("[FAIL] Schema validation errors: " + validationResult.error.message);
      throw new Error("Schema validation failed on invoice extraction");
    }

    const validatedData = validationResult.data;

    // 3. Mathematical Sanity Check (Subtotal + Tax == GrandTotal)
    const calculatedTotal = validatedData.subtotal + validatedData.taxAmount;
    const isMathAccurate = Math.abs(calculatedTotal - validatedData.grandTotal) < 0.02;

    if (!isMathAccurate) {
      audit.push("[WARN] Mathematical mismatch on invoice total");
      return {
        status: 'REQUIRES_HUMAN_REVIEW',
        data: validatedData,
        auditTrail: audit
      };
    }

    // 4. Determine Routing Policy
    if (validatedData.confidenceScore >= this.confidenceThreshold) {
      audit.push("[APPROVED] High-confidence extraction. Routing to ERP ledger.");
      return {
        status: 'AUTO_APPROVED',
        data: validatedData,
        auditTrail: audit
      };
    }

    audit.push("[ESCALATED] Marginal confidence. Pushed to Operator Exception Queue.");
    return {
      status: 'REQUIRES_HUMAN_REVIEW',
      data: validatedData,
      auditTrail: audit
    };
  }

  private async executeLLMExtraction(text: string): Promise<any> {
    return {
      invoiceNumber: "INV-2026-9041",
      vendorName: "Apex Industrial Logistics LLC",
      vendorTaxId: "US-8839102-K",
      billingDate: "2026-08-12",
      lineItems: [
        { description: "Automated Sensor Calibration Pack", quantity: 4, unitPrice: 320.0, total: 1280.0 },
        { description: "Solenoid Valve Assembly Unit B", quantity: 2, unitPrice: 450.0, total: 900.0 }
      ],
      subtotal: 2180.0,
      taxAmount: 174.4,
      grandTotal: 2354.4,
      confidenceScore: 0.97
    };
  }
}
`,
    simulationLogs: [
      { time: '00:00.02', level: 'INFO', message: 'Document agent listening on webhooks /api/v1/intake/docs' },
      { time: '00:00.12', level: 'INFO', message: 'PDF Ingestion: Inbound 3-page commercial freight invoice received (2.4 MB)' },
      { time: '00:00.28', level: 'EXEC', message: 'Executing structured LLM prompt with strict Zod JSON schema validation' },
      { time: '00:00.64', level: 'SUCCESS', message: 'Extracted Invoice #INV-2026-9041 from Apex Industrial Logistics LLC' },
      { time: '00:00.75', level: 'INFO', message: 'Math verification: Subtotal ($2,180.00) + Tax ($174.40) == Grand Total ($2,354.40) ✓ MATCH' },
      { time: '00:00.89', level: 'SUCCESS', message: 'Confidence: 97.0% >= 92.0% threshold. Status: AUTO_APPROVED. Dispatched to ERP.' },
    ],
  },
  {
    id: 'hardware-iot',
    filename: 'liquid_filler_firmware.c',
    language: 'c',
    title: 'Industrial Liquid Filling Control System (Embedded C)',
    pillar: 'IoT & Custom Hardware Automation',
    description: 'Interrupt-driven bare-metal control loop for high-precision dual-stage liquid filling, optical bottle detection, and safety watchdog.',
    code: `/*
 * Liquid Filling Automation Firmware v2.4 (Embedded C / Arduino Architecture)
 * Architect: Delbert Aud | IoT & Hardware Systems Engineering
 * Target: Microchip ATmega328P / Arduino Industrial Board
 */

#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/delay.h>

// Pin Configuration Constants
#define PIN_OPTICAL_SENSOR   2   // INT0 - Hardware Interrupt for Bottle Presence
#define PIN_ESTOP_BUTTON     3   // INT1 - Hardware Interrupt for Emergency Stop
#define PIN_PUMP_RELAY       7   // High-current pump controller relay
#define PIN_SOLENOID_VALVE   8   // Dual-stage precision solenoid cutoff
#define PIN_STATUS_LED       13  // System operational indicator

// Operational Calibration Parameters
#define TARGET_FILL_MS       1450 // Calibrated milliseconds for 250ml precision fill
#define SETTLE_DELAY_MS      300  // Anti-foam surface stabilization delay

volatile uint8_t system_state = 0; // 0=IDLE, 1=FILLING, 2=COMPLETED, 99=ESTOP_TRIPPED
volatile uint32_t total_bottles_filled = 0;

void setup_io(void) {
    DDRB |= (1 << DDB0) | (1 << DDB5); // Solenoid (PIN 8) and Status LED (PIN 13)
    DDRD |= (1 << DDD7);               // Pump Relay (PIN 7)
    
    DDRD &= ~((1 << DDD2) | (1 << DDD3)); // Sensor (PIN 2) and E-Stop (PIN 3)
    PORTD |= (1 << PORTD2) | (1 << PORTD3);

    EICRA |= (1 << ISC01) | (1 << ISC11);
    EIMSK |= (1 << INT0) | (1 << INT1);

    PORTD &= ~(1 << PORTD7);
    PORTB &= ~(1 << PORTB0);
    
    sei(); // Enable global interrupts
}

ISR(INT0_vect) {
    if (system_state == 0) {
        system_state = 1; // Transition to FILLING
    }
}

ISR(INT1_vect) {
    PORTD &= ~(1 << PORTD7); // Shut pump immediately
    PORTB &= ~(1 << PORTB0); // Close solenoid immediately
    system_state = 99;       // Lock system into ESTOP state
}

int main(void) {
    setup_io();
    
    while(1) {
        switch(system_state) {
            case 0: // IDLE
                PORTB &= ~(1 << PORTB5);
                _delay_ms(10);
                break;

            case 1: // ACTIVE FILLING CYCLE
                PORTB |= (1 << PORTB5);
                PORTD |= (1 << PORTD7); // Turn on pump
                PORTB |= (1 << PORTB0); // Open precision solenoid
                
                _delay_ms(TARGET_FILL_MS);

                PORTB &= ~(1 << PORTB0); // Snap valve shut
                _delay_ms(50);
                PORTD &= ~(1 << PORTD7); // De-energize pump

                _delay_ms(SETTLE_DELAY_MS);
                total_bottles_filled++;
                system_state = 2;
                break;

            case 2: // CYCLE COMPLETE
                if (PIND & (1 << PIND2)) {
                    _delay_ms(100);
                    system_state = 0;
                }
                break;

            case 99: // EMERGENCY STOP
                PORTB ^= (1 << PORTB5);
                _delay_ms(150);
                break;
        }
    }
    return 0;
}
`,
    simulationLogs: [
      { time: '00:00.00', level: 'INFO', message: 'ATmega328P Industrial Firmware Boot (Clock: 16MHz, sei() active)' },
      { time: '00:00.05', level: 'INFO', message: 'Hardware Interrupts configured: INT0 (Bottle Sensor), INT1 (E-Stop Loop)' },
      { time: '00:00.22', level: 'EXEC', message: 'Optical Sensor Triggered (INT0). Bottle seated in fixture #1' },
      { time: '00:00.25', level: 'INFO', message: 'Actuators Engaged: Pump Relay [HIGH], Dual-Stage Solenoid [OPEN]' },
      { time: '00:01.70', level: 'EXEC', message: 'Target 1450ms elapsed. Snapping Solenoid closed (Valve latency: 4.2ms)' },
      { time: '00:02.00', level: 'SUCCESS', message: '✓ Fill complete: 250.2ml dispensed (Variance: +0.08%). Batch count: 1,482.' },
    ],
  },
  {
    id: 'web-lead-ops',
    filename: 'lead_lifecycle_gateway.ts',
    language: 'typescript',
    title: 'Real-Time Lead Intake & Operational Gateway',
    pillar: 'Online Solutions Development',
    description: 'Low-latency lead acquisition, deduplication engine, data enrichment, and automated sales pipeline routing.',
    code: `/**
 * Operational Lead Lifecycle & Routing Gateway
 * Architect: Delbert Aud | Online Solutions Development
 */

import { Request, Response } from 'express';

interface InboundLead {
  leadId: string;
  email: string;
  companyName: string;
  companySize?: string;
  primaryRequirement: 'BPA' | 'AI_WORKFLOW' | 'ONLINE_SOLUTIONS' | 'IOT_HARDWARE';
  estimatedVolumePerMonth: number;
}

export class LeadLifecycleGateway {
  private cache: Map<string, number> = new Map();

  async handleInboundLead(req: Request, res: Response): Promise<void> {
    const lead: InboundLead = req.body;
    const startTime = Date.now();

    try {
      // 1. Deduplication check (5-min window)
      const leadFingerprint = lead.email.toLowerCase() + "::" + lead.companyName.toLowerCase();
      if (this.isDuplicateSubmission(leadFingerprint)) {
        res.status(200).json({ status: 'IGNORED_DUPLICATE', message: 'Lead already queued' });
        return;
      }

      // 2. High-speed enrichment & routing tier calculation
      const routingScore = this.calculateLeadVelocityScore(lead);
      const assignedTier = routingScore > 80 ? 'EXECUTIVE_PRIORITY' : 'STANDARD_OPS';

      // 3. Dispatch to CRM and Slack notification bus
      await Promise.all([
        this.syncToInternalCRM(lead, assignedTier, routingScore),
        this.emitRealtimeNotification(lead, assignedTier)
      ]);

      const executionMs = (Date.now() - startTime).toString();

      res.status(201).json({
        success: true,
        leadId: lead.leadId,
        tier: assignedTier,
        latencyMs: executionMs,
        message: 'Lead ingested, enriched, and routed successfully.'
      });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  }

  private isDuplicateSubmission(fingerprint: string): boolean {
    const now = Date.now();
    const lastSeen = this.cache.get(fingerprint);
    if (lastSeen && now - lastSeen < 300000) return true;
    this.cache.set(fingerprint, now);
    return false;
  }

  private calculateLeadVelocityScore(lead: InboundLead): number {
    let score = 50;
    if (lead.estimatedVolumePerMonth > 10000) score += 30;
    if (lead.primaryRequirement === 'BPA' || lead.primaryRequirement === 'AI_WORKFLOW') score += 15;
    return Math.min(100, score);
  }

  private async syncToInternalCRM(lead: InboundLead, tier: string, score: number) {
    return true;
  }

  private async emitRealtimeNotification(lead: InboundLead, tier: string) {
    return true;
  }
}
`,
    simulationLogs: [
      { time: '00:00.01', level: 'INFO', message: 'POST /api/v1/leads/intake received [Origin: enterprise portal]' },
      { time: '00:00.04', level: 'EXEC', message: 'Deduplication cache scan: lead fingerprint delbert.aud@gmail.com is UNIQUE' },
      { time: '00:00.09', level: 'INFO', message: 'Scoring logic executed: Estimated volume >10k ops/mo -> Score 95/100' },
      { time: '00:00.18', level: 'SUCCESS', message: 'Assigned Tier: EXECUTIVE_PRIORITY. Dispatched to CRM and real-time alerts' },
      { time: '00:00.22', level: 'SUCCESS', message: 'HTTP 201 Created. Total gateway latency: 18.4ms.' },
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'industrial-liquid-filling',
    title: 'Industrial Liquid Filling Control System & Hardware Automation',
    category: 'IoT & Custom Hardware Engineering',
    badge: 'Niche Hardware Engineering Case Study',
    problem:
      'Manual and semi-manual liquid bottling lines suffered from significant volumetric variance (±7.5%), frequent container overflow spills, severe operator repetitive strain, and low output caps (under 12 units/minute). Legacy off-the-shelf industrial solutions carried prohibitive capital expenditure costs and lacked modular sensor integration for custom bottle geometries.',
    systemArchitecture: [
      'Microcontroller Control Core: Deployed custom bare-metal Embedded C firmware on ATmega architecture, operating an interrupt-driven state machine with sub-millisecond execution cycles.',
      'Precision Flow Metering: Engineered dual-stage flow actuation combining a high-volume intake pump with a high-speed magnetic solenoid valve for instant hydrodynamic cutoff.',
      'Sensor Subsystem: Integrated optical non-contact bottle presence sensors with hardware debouncing (INT0) and analog strain-gauge load cells (HX711 24-bit ADC) for continuous tare verification.',
      'Safety & Failsafe Watchdog: Implemented hardware-level E-Stop loop (INT1) that immediately disconnects power rails from all inductive pump loads in < 5 milliseconds.',
      'Telemetry & Diagnostics: Embedded serial RS-232 telemetry stream broadcasting real-time batch counts, cycle latencies, and fill volume distribution to supervisor terminals.',
    ],
    businessResult: [
      'Fill Throughput Increased by +350%: Production capacity scaled from 12 bottles/minute to over 42 bottles/minute in continuous operation.',
      'Volumetric Variance Slashed to < ±0.5%: High-speed solenoid cutoff virtually eliminated product overfill waste and post-fill cleanup overhead.',
      'Zero Spill Incidents: Optical presence interlock and dual emergency stops prevented dry-firing and container misplacement spills.',
      'ROI Payback in Under 45 Days: The custom automated hardware solution yielded complete capital recovery within 6 weeks through labor reallocation and product savings.',
    ],
    metrics: [
      { label: 'Throughput', value: '+350%' },
      { label: 'Fill Variance', value: '< ±0.5%' },
      { label: 'Spill Incidents', value: '0' },
      { label: 'Payback Period', value: '45 Days' },
    ],
    tags: ['Embedded C', 'Arduino', 'Hardware Interrupts', 'Actuators', 'Industrial Automation', 'Sensor Integration'],
  },
  {
    id: 'enterprise-rpa-transformation',
    title: 'Enterprise Business Systems Analysis & End-to-End RPA Transformation',
    category: 'Business Process Automation & Systems Analysis',
    badge: 'Primary Core Transformation Case Study',
    problem:
      'A multi-entity organization was bogged down by 140+ weekly staff hours spent manually transcribing data between disconnected ERP legacy databases, third-party logistics (3PL) supplier portals, and customer invoicing software. Error rates averaged 4.2%, causing recurring customer billing disputes and multi-day shipping release delays.',
    systemArchitecture: [
      'Comprehensive Systems Analysis: Conducted exhaustive value stream mapping across finance, warehouse operations, and vendor management to isolate critical data bottlenecks.',
      'Autonomous Headless Ingestion Engine: Developed Python-based RPA workers utilizing resilient Playwright browser instances and direct database connectors with transactional idempotency.',
      'AI-Powered Exception Parser: Integrated LLM document categorization to extract structured line items from non-standard vendor PDF bills of lading and freight confirmations.',
      'Dead-Letter & Audit Queue: Engineered self-healing retry strategies with automated notifications alerting system supervisors only when genuine business rule exceptions occurred.',
    ],
    businessResult: [
      '84% Reduction in Manual Labor: Reclaimed over 115 staff hours per week, allowing core personnel to focus on strategic business development.',
      'Error Rate Dropped from 4.2% to 0.02%: Near-zero transcription errors eradicated billing disputes and accelerated invoice payment cycles by 9 days.',
      'Same-Day Order Fulfillment: Order release latency dropped from 48 hours to under 8 minutes from purchase order receipt.',
      'Audit Compliance: 100% immutable transactional logging established complete traceability for financial regulatory reviews.',
    ],
    metrics: [
      { label: 'Labor Reclaimed', value: '115 hrs/wk' },
      { label: 'Error Rate', value: '0.02%' },
      { label: 'Fulfillment Speed', value: '8 min' },
      { label: 'Annual Savings', value: '$180,000+' },
    ],
    tags: ['RPA', 'Python', 'Business Systems Analysis', 'ERP Integration', 'Process Optimization', 'ETL'],
  },
];

export const WORK_HISTORY: WorkExperience[] = [
  {
    role: 'Business Process Automation Architect & Systems Consultant',
    organization: 'Independent Technical Advisory & Enterprise Systems Architecture',
    period: '2021 — Present',
    location: 'Remote / US',
    highlights: [
      'Architect and deploy high-reliability Robotic Process Automation (RPA) workflows and custom AI extraction pipelines for mid-market and enterprise clients.',
      'Perform rigorous Senior Business Systems Analysis to map operational bottlenecks, calculate automation ROI, and design scalable software and hardware architectures.',
      'Engineer custom web applications, internal operational command portals, and automated lead lifecycle gateways that streamline cross-functional workflows.',
      'Design embedded C and microcontroller automation solutions for industrial mechanics, liquid dispensing, and sensor telemetry.',
      'Author executive technical documentation, architectural specifications, and standard operating procedures (SOPs).',
    ],
    skills: ['Business Process Automation', 'RPA', 'AI Workflows', 'Python', 'TypeScript', 'Embedded C', 'Systems Analysis', 'Technical Copywriting'],
  },
  {
    role: 'Senior Business Systems Analyst & Automation Lead',
    organization: 'Enterprise Solutions Group',
    period: '2017 — 2021',
    location: 'United States',
    highlights: [
      'Led cross-functional initiatives analyzing enterprise workflows across ERP, CRM, and financial accounting ecosystems.',
      'Built automated data orchestration pipelines reducing monthly financial close cycles from 12 days to 3 days.',
      'Spearheaded vendor integration APIs, webhook infrastructure, and customer onboarding automation.',
      'Collaborated closely with executive stakeholders, translating high-level business goals into precise functional requirements and technical roadmap milestones.',
    ],
    skills: ['Enterprise Systems', 'Workflow Automation', 'SQL', 'Data Pipelines', 'Stakeholder Management', 'Process Modeling'],
  },
  {
    role: 'Systems & Technical Solutions Engineer',
    organization: 'Advanced Operations & Hardware Systems',
    period: '2014 — 2017',
    location: 'United States',
    highlights: [
      'Designed and programmed microcontroller-based hardware control systems, automated test benches, and sensor acquisition interfaces.',
      'Authored comprehensive technical documentation, operator guides, and compliance test procedures.',
      'Developed internal reporting tools and real-time telemetry dashboards for operations supervisors.',
    ],
    skills: ['Embedded Systems', 'Hardware Debugging', 'C/C++', 'Technical Writing', 'Data Logging'],
  },
];

export const DOWNLOADABLE_ASSETS = [
  {
    filename: 'delbert_aud_resume.pdf',
    title: 'Delbert Aud - Executive Resume (PDF)',
    format: 'PDF',
    size: '184 KB',
    description: 'Formatted executive resume highlighting Business Process Automation, Systems Architecture, and Technical Leadership.',
    recommended: true,
  },
  {
    filename: 'delbert_aud_resume.docx',
    title: 'Delbert Aud - Executive Resume (DOCX)',
    format: 'DOCX',
    size: '142 KB',
    description: 'Microsoft Word format for Applicant Tracking Systems (ATS) and recruiter databases.',
    recommended: false,
  },
  {
    filename: 'delbert_aud_work_history.pdf',
    title: 'Delbert Aud - Detailed Work History (PDF)',
    format: 'PDF',
    size: '220 KB',
    description: 'Comprehensive project chronicles, detailed case studies, architectural breakdowns, and client outcomes.',
    recommended: true,
  },
  {
    filename: 'delbert_aud_work_history.docx',
    title: 'Delbert Aud - Detailed Work History (DOCX)',
    format: 'DOCX',
    size: '168 KB',
    description: 'Complete career archive and project chronology in Microsoft Word format.',
    recommended: false,
  },
];
