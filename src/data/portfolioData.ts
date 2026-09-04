export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  domain: string;
  featured: boolean;
  categories: string[];
  technologies: string[];
  architectureSummary: string;
  businessProblem: string;
  solutionOverview: string;
  engineeringWork: string[];
  keyCapabilities: string[];
  dataFlowSteps: { step: string; title: string; desc: string; tech: string }[];
  dataModelInfo: {
    type: string;
    facts: string[];
    dimensions: string[];
    description: string;
  };
  pipelineDesign: {
    ingestion: string;
    transformation: string;
    qualityChecks: string[];
  };
  analyticsInfo: {
    kpisCount?: string;
    implementedAnalytics: string[];
    plannedAnalytics: string[];
  };
  engineeringDecisions: string[];
  whatThisDemonstrates: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  architectureDiagramType: 'healthcare' | 'flight' | 'local-etl' | 'fabric' | 'sales' | 'synthea';
}

export interface PipelineStage {
  id: string;
  number: string;
  name: string;
  badge: string;
  role: string;
  technologies: string[];
  formats: string[];
  details: string;
  qualityGate: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; isHighlight?: boolean; note?: string }[];
}

export interface SqlSnippet {
  id: string;
  title: string;
  category: string;
  description: string;
  concept: string;
  code: string;
  businessContext: string;
}

export interface ConceptItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  engineeringTradeoff: string;
}

export const PERSONAL_INFO = {
  name: "Ammar",
  role: "Junior Data Engineer",
  headline: "Junior Data Engineer | ETL/ELT | SQL | Python | Azure | Databricks | Apache Spark | Microsoft Fabric",
  tagline: "Building reliable data pipelines from source to insight.",
  shortBio:
    "Junior Data Engineer with around one year of professional experience working across ETL/ELT pipelines, relational databases, data warehousing, dimensional modeling, and modern cloud platforms. With a strong foundation in SQL and hands-on exposure to Azure, Databricks, Apache Spark, Microsoft Fabric, and Power BI, I specialize in transforming raw, disordered data into governed, analytics-ready models.",
  fullBio: [
    "I am a Junior Data Engineer with around one year of experience working with data engineering, ETL/ELT pipelines, databases, data warehousing, dimensional modeling, cloud data platforms, and analytics.",
    "My strongest area is SQL, while I am continuously developing deeper expertise in cloud data engineering, Spark, Databricks, Microsoft Fabric, and modern data platforms. I have worked extensively with on-premises data solutions, relational databases, and modern cloud architectures.",
    "I believe reliable data systems are founded on sound architectural principles: robust data ingestion, automated quality validations, reproducible transformations through Medallion layers, and clean dimensional models that enable business users to extract accurate insights effortlessly."
  ],
  stats: [
    { label: "Hands-on Experience", value: "~1 Year", detail: "On-premises databases & modern cloud platforms" },
    { label: "Core Specialization", value: "SQL & ETL", detail: "Complex queries, window functions & dimensional modeling" },
    { label: "Cloud Platforms", value: "Azure & Fabric", detail: "ADF, ADLS Gen2, Databricks, Synapse & OneLake" },
    { label: "Engineered Projects", value: "6 Solutions", detail: "Healthcare, Flights, Sales, Streaming & Local ETL" }
  ],
  links: {
    github: "https://github.com/databeli/finguard_streaming_project", // Featured real repo
    githubProfile: "https://github.com/YOUR_GITHUB_URL", // Placeholder
    linkedin: "https://linkedin.com/in/YOUR_LINKEDIN_URL", // Placeholder
    email: "YOUR_EMAIL@example.com", // Placeholder
    resume: "/assets/resume.pdf" // Placeholder
  }
};

export const CORE_STRENGTHS = [
  {
    title: "SQL & Query Optimization",
    badge: "Primary Differentiator",
    description: "Deep SQL foundation including CTEs, Window functions, complex multi-table joins, subqueries, indexing strategies, and incremental merge patterns."
  },
  {
    title: "End-to-End Data Lifecycle",
    badge: "Architecture",
    description: "Holistic understanding of data flow: from raw sources and landing layers to Medallion bronze/silver/gold, dimensional modeling, and BI consumption."
  },
  {
    title: "Microsoft Azure Ecosystem",
    badge: "Cloud Platform",
    description: "Practical pipeline orchestration and lakehouse engineering with Azure Data Factory, ADLS Gen2, Databricks, Synapse Analytics, and Azure Key Vault."
  },
  {
    title: "Databricks & Apache Spark",
    badge: "Big Data Processing",
    description: "Hands-on experience with PySpark, distributed data transformations, partition strategies, schema enforcement, and Delta Lake optimizations."
  },
  {
    title: "Microsoft Fabric & OneLake",
    badge: "Modern Data Platform",
    description: "Hands-on journey building unified architectures across OneLake, Fabric Lakehouse, Fabric Data Warehouse, pipelines, and Direct Lake Power BI."
  },
  {
    title: "Hybrid Data Engineering",
    badge: "Enterprise Versatility",
    description: "Comfortable navigating traditional enterprise databases (SQL Server, Oracle, PostgreSQL, MySQL) and integrating them with cloud platforms."
  },
  {
    title: "Dimensional Data Modeling",
    badge: "Data Warehousing",
    description: "Sound understanding of Kimball methodologies, Star & Snowflake schemas, Fact and Dimension table design, surrogate keys, and SCD patterns."
  },
  {
    title: "Quality & Governance",
    badge: "Reliability",
    description: "Implementing automated data cleansing, validation rules, schema drift detection, null handling, and data privacy safeguards."
  }
];

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: "source",
    number: "01",
    name: "SOURCE",
    badge: "Origin",
    role: "Diverse source systems generating raw business transactions and logs",
    technologies: ["Relational Databases (SQL Server, Oracle, MySQL, Postgres)", "REST APIs", "CSV / JSON / Parquet Files", "Streaming Logs"],
    formats: ["RDBMS Tables", "Delimited Text", "Semi-Structured JSON", "Binary Logs"],
    details: "Transactional OLTP engines, external APIs, and IoT or application logs that generate raw business activity with heterogeneous schemas and varying arrival frequencies.",
    qualityGate: "Source connectivity checks, authentication via Azure Key Vault / credentials, and extraction timestamp logging."
  },
  {
    id: "ingest",
    number: "02",
    name: "INGEST",
    badge: "Extraction",
    role: "Extracting and orchestrating data transfer without modifying raw state",
    technologies: ["Azure Data Factory (ADF)", "Fabric Pipelines", "Apache Airflow", "Python Requests / Boto3"],
    formats: ["Raw Files", "Staged Blobs", "Event Streams"],
    details: "Automated batch or incremental extraction pipelines copying source feeds into cloud storage. Decouples extraction load from operational sources and preserves landing raw payloads.",
    qualityGate: "File arrival verification, record count auditing, schema drift detection, and automated pipeline retry logic."
  },
  {
    id: "store",
    number: "03",
    name: "STORE",
    badge: "Storage Layer",
    role: "Scalable, cost-effective centralized object and lake storage",
    technologies: ["Azure Data Lake Storage Gen2 (ADLS)", "Microsoft Fabric OneLake", "Azure Blob Storage", "Amazon S3"],
    formats: ["Raw CSV/JSON", "Delta Lake (Parquet)", "Hierarchical Directories"],
    details: "Hierarchical storage partitioned logically by year/month/day or domain. Forms the multi-zone foundation for Bronze raw ingestion and scalable analytical queries.",
    qualityGate: "Managed Identity authentication, Azure Key Vault secrets, RBAC least-privilege policies, and encryption at rest/in transit."
  },
  {
    id: "transform",
    number: "04",
    name: "TRANSFORM",
    badge: "Processing",
    role: "Cleansing, parsing, deduplication, and distributed business transformation",
    technologies: ["Azure Databricks", "Apache Spark / PySpark", "Python (Pandas)", "Fabric Data Engineering"],
    formats: ["Delta Lake (Bronze → Silver)", "Snappy Parquet", "Optimized DataFrames"],
    details: "Distributed Spark compute executing Medallion transformations: Bronze raw capture, Silver cleansed/deduplicated tables with strict schema enforcement, and Gold aggregated models.",
    qualityGate: "Null checks on primary keys, type casting validation, deduplication rules, date range constraints, and business logic verification."
  },
  {
    id: "model",
    number: "05",
    name: "MODEL",
    badge: "Architecture",
    role: "Structuring curated data into optimized analytical models and schemas",
    technologies: ["SQL & PL/SQL", "Dimensional Modeling", "Star Schema / Snowflake", "Fabric Data Warehouse"],
    formats: ["Fact Tables", "Dimension Tables", "Surrogate Keys", "SCD Type 1 & 2"],
    details: "Kimball-inspired dimensional modeling transforming denormalized silver datasets into clean Fact tables with grain definitions and surrounding Dimension tables for drill-down analytics.",
    qualityGate: "Referential integrity between Facts and Dimensions, uniqueness of surrogate keys, and validation of historical SCD timestamp spans."
  },
  {
    id: "serve",
    number: "06",
    name: "SERVE",
    badge: "Consumption",
    role: "High-performance analytical engines delivering curated datasets",
    technologies: ["Azure Synapse Analytics", "Fabric Lakehouse / Warehouse", "PostgreSQL", "SQL Server / Redshift"],
    formats: ["Delta Tables", "Relational Views", "Partitioned Columnar Stores"],
    details: "Serving layer providing enterprise SQL endpoints, low-latency aggregations, and high concurrency for business analysts, downstream applications, and BI engines.",
    qualityGate: "Query execution plan tuning, partitioning alignment, index maintenance, and semantic cache verification."
  },
  {
    id: "analyze",
    number: "07",
    name: "ANALYZE",
    badge: "Business Value",
    role: "Interactive dashboards, DAX calculations, and decision-support KPIs",
    technologies: ["Power BI", "DAX", "Power Query", "Direct Lake Mode", "Interactive Reports"],
    formats: ["Semantic Models", "Calculated Measures", "Executive Dashboards"],
    details: "The final analytical consumption layer where business stakeholders interact with pre-modeled KPIs, time-intelligence calculations, and operational performance dashboards.",
    qualityGate: "Measure cross-reconciliation against warehouse facts, DAX formula performance audits, and role-based data filtering."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming & Querying",
    description: "Core programming and database query languages with emphasis on SQL depth",
    skills: [
      { name: "SQL", isHighlight: true, note: "Strongest Skill: Window functions, CTEs, Joins, Query Tuning, DDL/DML" },
      { name: "Python", isHighlight: true, note: "ETL scripting, PySpark, data manipulation, automation" },
      { name: "PySpark", isHighlight: true, note: "Distributed DataFrames, transformations, Spark SQL" },
      { name: "PL/SQL", note: "Stored procedures, cursors, triggers in Oracle environments" },
      { name: "DAX", note: "Measures, calculated columns, time-intelligence for Power BI" }
    ]
  },
  {
    category: "Data Engineering & Architecture",
    description: "Core concepts and pipeline patterns for robust data movement",
    skills: [
      { name: "ETL / ELT Pipelines", isHighlight: true },
      { name: "Medallion Architecture (Bronze/Silver/Gold)", isHighlight: true },
      { name: "Dimensional Modeling (Kimball)", isHighlight: true },
      { name: "Star Schema & Snowflake Schema", isHighlight: true },
      { name: "Fact & Dimension Design" },
      { name: "Batch Processing" },
      { name: "Incremental Loading & CDC Concepts" },
      { name: "Data Cleansing & Validation" },
      { name: "Data Quality Auditing" },
      { name: "Surrogate Keys & SCD" }
    ]
  },
  {
    category: "Microsoft Azure",
    description: "Cloud data platform services for scalable enterprise workloads",
    skills: [
      { name: "Azure Data Factory (ADF)", isHighlight: true },
      { name: "Azure Databricks", isHighlight: true },
      { name: "Azure Data Lake Storage Gen2 (ADLS)", isHighlight: true },
      { name: "Azure Synapse Analytics" },
      { name: "Azure Blob Storage" },
      { name: "Azure Key Vault", note: "Secrets & credential management" },
      { name: "Managed Identity & IAM / RBAC", note: "Secure access control" },
      { name: "Self-Hosted Integration Runtime" }
    ]
  },
  {
    category: "Microsoft Fabric",
    description: "Unified modern data platform and lakehouse ecosystem",
    skills: [
      { name: "Microsoft Fabric Platform", isHighlight: true },
      { name: "OneLake", isHighlight: true, note: "Unified SaaS lake storage" },
      { name: "Fabric Lakehouse", isHighlight: true, note: "Delta Lake & Spark processing" },
      { name: "Fabric Data Warehouse", note: "T-SQL relational engine" },
      { name: "Fabric Pipelines", note: "Data Factory orchestration in Fabric" },
      { name: "Fabric Data Engineering", note: "Notebooks & Spark jobs" },
      { name: "Power BI Direct Lake Mode" }
    ]
  },
  {
    category: "Big Data & Distributed Compute",
    description: "Processing large-scale datasets with distributed engines",
    skills: [
      { name: "Apache Spark", isHighlight: true },
      { name: "Databricks Workspace & Notebooks", isHighlight: true },
      { name: "Distributed DataFrames & Partitioning" },
      { name: "Large-Scale File Ingestion" },
      { name: "Delta Lake / Parquet Optimization" },
      { name: "Spark Cluster Master & Worker Architecture" }
    ]
  },
  {
    category: "Relational & Enterprise Databases",
    description: "On-premises and cloud database systems",
    skills: [
      { name: "PostgreSQL", isHighlight: true },
      { name: "SQL Server (T-SQL)", isHighlight: true },
      { name: "Oracle Database & PL/SQL" },
      { name: "MySQL" },
      { name: "Stored Procedures, Triggers & Views" },
      { name: "Index Optimization & Execution Plans" }
    ]
  },
  {
    category: "Orchestration & DevOps",
    description: "Automation, containerization, and version control for reliable pipelines",
    skills: [
      { name: "Apache Airflow", isHighlight: true, note: "DAG creation, task scheduling, operators" },
      { name: "Docker & Docker Compose", isHighlight: true, note: "Containerized Spark/Airflow stacks" },
      { name: "Git & GitHub / GitLab", isHighlight: true },
      { name: "Jenkins CI/CD", note: "Automated test & pipeline build concepts" },
      { name: "Modular Python Project Structure" }
    ]
  },
  {
    category: "Analytics & Business Intelligence",
    description: "Transforming warehouse models into actionable decision support",
    skills: [
      { name: "Power BI", isHighlight: true },
      { name: "Power Query (M)", isHighlight: true },
      { name: "DAX Modeling & Calculated Measures", isHighlight: true },
      { name: "KPI Development & Metric Layer" },
      { name: "Executive & Operational Dashboards" }
    ]
  },
  {
    category: "AWS & Tools",
    description: "Cloud storage, querying, and primary developer environments",
    skills: [
      { name: "Amazon S3" },
      { name: "Amazon Redshift" },
      { name: "Amazon Athena" },
      { name: "VS Code", isHighlight: true },
      { name: "SSMS (SQL Server Management Studio)", isHighlight: true },
      { name: "DBeaver" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "healthcare-lakehouse",
    title: "Healthcare Enterprise Lakehouse — Medallion Architecture, Data Warehouse & Analytics Platform",
    shortTitle: "Healthcare Enterprise Lakehouse",
    subtitle: "Enterprise clinical & operational analytics platform inspired by Indus Hospital & Health Network (IHHN)",
    domain: "Healthcare & Hospital Operations",
    featured: true,
    categories: ["Azure", "Databricks", "Spark", "SQL", "Data Warehouse", "Lakehouse", "ETL", "Healthcare", "Analytics"],
    technologies: [
      "Python",
      "SQL",
      "Oracle",
      "PL/SQL",
      "Azure Data Factory",
      "Azure Data Lake Storage Gen2",
      "Azure Databricks",
      "Apache Spark / PySpark",
      "Azure Synapse Analytics",
      "Power BI",
      "DAX",
      "Medallion Architecture",
      "Dimensional Modeling"
    ],
    architectureSummary:
      "Healthcare Data Sources → Azure Data Factory → ADLS Gen2 → Bronze Layer → Silver Layer → Gold Layer → Dimensional Model → Azure Synapse Analytics → Power BI",
    businessProblem:
      "Modern healthcare facilities generate massive, fragmented operational and clinical datasets spanning patient registrations, practitioner assignments, emergency triage, encounters, admissions, and clinical procedures. Disparate source systems (including legacy Oracle databases) hindered unified reporting, patient flow tracking, and operational efficiency analysis across departments.",
    solutionOverview:
      "Designed and implemented an automated end-to-end Medallion lakehouse platform using Azure Data Factory, ADLS Gen2, and Azure Databricks with PySpark. The platform ingests source feeds into raw Bronze Delta tables, cleanses and deduplicates records in Silver, builds Kimball dimensional models (Star Schema) in Gold, stages curated models in Azure Synapse Analytics, and surfaces 100+ KPIs via Power BI dashboards.",
    engineeringWork: [
      "Built automated ADF extraction pipelines ingesting clinical feeds into ADLS Gen2 with parameterized runtime triggers.",
      "Developed PySpark transformations in Azure Databricks enforcing strict schema definitions, null-handling, and deduplication across millions of records.",
      "Engineered Kimball Star Schema with central Fact tables (`FactEncounter`, `FactAdmission`, `FactClinicalActivity`) and conformed Dimensions (`DimPatient`, `DimPractitioner`, `DimTriage`, `DimDate`).",
      "Designed Medallion staging (Bronze raw capture, Silver cleansed delta, Gold curated dimensional aggregates).",
      "Implemented automated data validation checks verifying primary key uniqueness, foreign key referential integrity, and timestamp sanity.",
      "Configured secure data access patterns considering Managed Identity, IAM / RBAC, and Azure Key Vault for secret management."
    ],
    keyCapabilities: [
      "Processes millions of healthcare records with multi-zone Medallion architecture",
      "Handles 8+ healthcare operational domains (Patients, Practitioners, Triage, Encounters, Admissions, Clinical Activities, Allergies)",
      "Supports 100+ operational and clinical KPIs across emergency and inpatient departments",
      "Architected with healthcare data privacy and security considerations in mind"
    ],
    dataFlowSteps: [
      { step: "01", title: "Source Systems", desc: "Oracle OLTP clinical databases, admission logs, triage records", tech: "Oracle / PL/SQL" },
      { step: "02", title: "Automated Ingestion", desc: "Parameter-driven pipelines extracting delta records into cloud storage", tech: "Azure Data Factory" },
      { step: "03", title: "Bronze Layer", desc: "Raw data landing in ADLS Gen2 preserving source schema and metadata", tech: "ADLS Gen2 / Delta Lake" },
      { step: "04", title: "Silver Layer", desc: "PySpark cleansing, deduplication, type casting, and anomaly filtering", tech: "Databricks / PySpark" },
      { step: "05", title: "Gold Layer", desc: "Kimball Star Schema dimensional modeling and business aggregations", tech: "Databricks Delta Gold" },
      { step: "06", title: "Serving & BI", desc: "Synapse Analytics SQL dedicated pool powering interactive reporting", tech: "Synapse / Power BI" }
    ],
    dataModelInfo: {
      type: "Kimball Star Schema (Enterprise Dimensional Model)",
      facts: [
        "Fact_Encounter (EncounterKey, PatientKey, PractitionerKey, DateKey, TriageKey, LengthOfStayHours, Cost)",
        "Fact_Admission (AdmissionKey, PatientKey, DepartmentKey, BedKey, AdmissionDateKey, DischargeDateKey)",
        "Fact_ClinicalActivity (ActivityKey, EncounterKey, ProcedureKey, PractitionerKey, ActivityTimestamp)"
      ],
      dimensions: [
        "Dim_Patient (PatientKey [SK], PatientId, Gender, BirthDate, BloodGroup, City, SCD_EffectiveDate)",
        "Dim_Practitioner (PractitionerKey [SK], PractitionerId, FullName, Specialty, Department)",
        "Dim_Triage (TriageKey [SK], AcuityLevel, PriorityCode, Description)",
        "Dim_Date (DateKey, FullDate, DayOfWeek, MonthName, Quarter, Year, IsWeekend)"
      ],
      description:
        "Surrogate keys generated via Spark monotonically_increasing_id() and window row_number() functions. Fact tables hold granular operational events joined seamlessly to conformed dimensions."
    },
    pipelineDesign: {
      ingestion: "Scheduled Azure Data Factory pipelines with watermarking on last modified timestamp for incremental loading.",
      transformation: "Azure Databricks notebooks utilizing PySpark DataFrames with broadcast joins for small lookup dimensions and partitioned writes by Year/Month.",
      qualityChecks: [
        "Mandatory Non-Null validation on PatientId and EncounterId keys",
        "Referential integrity checks against Conformed Dimension surrogate lookups",
        "Chronological integrity check (DischargeTimestamp >= AdmissionTimestamp)",
        "Row count balance audits across Bronze vs Silver vs Gold stages"
      ]
    },
    analyticsInfo: {
      kpisCount: "100+ KPIs",
      implementedAnalytics: [
        "Average Length of Stay (ALOS) by Department and Acuity",
        "Emergency Department Door-to-Doctor Wait Times",
        "Triage Acuity Distribution (Level 1 Resuscitation to Level 5 Non-Urgent)",
        "Bed Occupancy Rate & Discharge Velocity",
        "Patient Encounter Volumes by Specialty and Time of Day"
      ],
      plannedAnalytics: [
        "Readmission Rate within 30-Day Window by Diagnostic Category",
        "Predictive Bed Shortage Forecasting using Time Series Analysis",
        "Practitioner Resource Utilization & Overtime Optimization"
      ]
    },
    engineeringDecisions: [
      "Chose Medallion architecture to provide immutable auditing at Bronze while guaranteeing clean, queryable models at Silver and Gold.",
      "Used Parquet-based Delta Lake to leverage ACID transactions, schema enforcement, and time travel capabilities during transformation runs.",
      "Applied star schema dimensional modeling over flat reporting tables to enable fast Power BI DAX calculations and drill-down flexibility."
    ],
    whatThisDemonstrates: [
      "End-to-end cloud data engineering lifecycle from ingestion to BI",
      "Medallion architecture implementation on Azure Databricks",
      "Kimball Star Schema dimensional modeling in healthcare",
      "Handling complex relational sources (Oracle / PL/SQL) into cloud lakehouses",
      "Enterprise security mindset with Managed Identity and Key Vault integration"
    ],
    architectureDiagramType: "healthcare"
  },
  {
    id: "flight-data-platform",
    title: "Flight Data Engineering & Analytics Platform",
    shortTitle: "Flight Data Platform",
    subtitle: "Large-scale aviation performance pipeline processing high-volume airline and airport operations",
    domain: "Aviation & Transportation Logistics",
    featured: true,
    categories: ["Azure", "Databricks", "Spark", "Microsoft Fabric", "SQL", "Python", "Power BI", "Data Warehouse", "Lakehouse", "ETL", "Analytics"],
    technologies: [
      "Azure Data Factory",
      "Azure Data Lake Storage Gen2",
      "Azure Databricks",
      "Apache Spark",
      "PySpark",
      "SQL",
      "Microsoft Fabric",
      "Fabric Lakehouse",
      "Fabric Data Warehouse",
      "Power BI",
      "DAX",
      "Snappy Parquet"
    ],
    architectureSummary:
      "Flight Data Sources → Landing → Raw → Bronze → Silver → Gold → Dimensional Model → Fabric Warehouse / Lakehouse → Power BI",
    businessProblem:
      "Airline flight operations produce millions of granular flight events containing on-time metrics, departure delays, weather deviations, taxi-in/out times, and cancellation indicators. Analyzing route profitability, carrier reliability, and systemic congestion bottlenecks requires processing massive delimited files without performance bottlenecks or schema mismatches.",
    solutionOverview:
      "Constructed a high-throughput big data pipeline leveraging DOT On-Time Reporting Carrier Performance datasets. Implemented scalable file ingestion via Azure Data Factory into ADLS Gen2, orchestrated PySpark transformations on Databricks to clean messy times and codes, modeled a dimensional star schema in Fabric Lakehouse/Warehouse, and surfaced operational intelligence in Power BI.",
    engineeringWork: [
      "Ingested multi-gigabyte monthly airline CSV datasets into ADLS Gen2 landing containers with automated directory partitioning.",
      "Authored optimized PySpark scripts handling null values, corrupted timestamps (e.g. 2400 military time conversions), and airport coordinate mappings.",
      "Partitioned Delta datasets by Year and Quarter to eliminate full table scans on historical analytical queries.",
      "Constructed Kimball dimensional model with central `FactFlightLeg` and dimensions `DimCarrier`, `DimOriginAirport`, `DimDestAirport`, and `DimDelayReason`.",
      "Evaluated Microsoft Fabric Lakehouse vs Data Warehouse querying capabilities for Direct Lake reporting.",
      "Engineered automated data validation scripts validating flight duration arithmetic (`ArrTime - DepTime == ActualElapsedTime`)."
    ],
    keyCapabilities: [
      "Large-scale distributed CSV processing and schema normalization with PySpark",
      "Optimized partition pruning and Delta Lake indexing for sub-second analytical queries",
      "Integration across both Azure Databricks and Microsoft Fabric modern data platforms",
      "Comprehensive delay cause categorization (Carrier, Weather, NAS, Security, Late Aircraft)"
    ],
    dataFlowSteps: [
      { step: "01", title: "Flight Sources", desc: "Bureau of Transportation Statistics monthly carrier performance files", tech: "Raw Large CSVs" },
      { step: "02", title: "ADF Ingestion", desc: "Automated ingestion pipeline moving multi-GB archives to Landing", tech: "Azure Data Factory" },
      { step: "03", title: "Bronze & Raw", desc: "Unprocessed Parquet snapshot with lineage timestamps and source metadata", tech: "ADLS Gen2 Landing" },
      { step: "04", title: "Silver Cleansing", desc: "Spark deduplication, timestamp harmonization, and airport code validation", tech: "Databricks / PySpark" },
      { step: "05", title: "Gold Modeling", desc: "Dimensional Fact & Dimension star schema stored as Delta tables", tech: "Fabric Lakehouse" },
      { step: "06", title: "Power BI Analytics", desc: "Direct Lake connectivity delivering delay insights and route efficiency", tech: "Power BI / DAX" }
    ],
    dataModelInfo: {
      type: "Star Schema with Conformed Role-Playing Dimensions",
      facts: [
        "Fact_FlightLeg (FlightKey, CarrierKey, OriginAirportKey, DestAirportKey, FlightDateKey, DepDelayMinutes, ArrDelayMinutes, AirTimeMinutes, DistanceMiles, IsCancelled, IsDiverted)"
      ],
      dimensions: [
        "Dim_Carrier (CarrierKey, CarrierCode, CarrierName, FleetSizeCategory)",
        "Dim_Airport [Role-Playing Origin/Dest] (AirportKey, AirportCode, AirportName, City, State, Latitude, Longitude)",
        "Dim_DelayReason (DelayReasonKey, Category, Description, SeverityTier)",
        "Dim_Date (DateKey, FlightDate, DayOfWeek, Month, Year, Season, HolidayFlag)"
      ],
      description:
        "Role-playing airport dimension used for both Origin and Destination airports, joined with conformed Date and Carrier dimensions to allow cross-carrier comparative metrics."
    },
    pipelineDesign: {
      ingestion: "Parameterized Azure Data Factory pipeline dynamically cycling through monthly data drops, uploading to ADLS Gen2 raw directory.",
      transformation: "Distributed PySpark job in Databricks converting string military timestamps into valid ISO timestamps, applying schema enforcement, and writing partitioned Delta files.",
      qualityChecks: [
        "Airport IATA 3-character code validity checks against master reference dictionary",
        "Delay arithmetic consistency (`ArrDelay == ActualArr - SchedArr`)",
        "Outlier handling for negative taxi times or impossibly long flight durations",
        "Completeness audit verifying zero missing flight dates or carrier codes"
      ]
    },
    analyticsInfo: {
      implementedAnalytics: [
        "On-Time Arrival & Departure Performance Percentage by Carrier",
        "Average Arrival Delay Minutes across Top 20 Busiest Hub Airports",
        "Flight Cancellation Rates grouped by Weather vs Carrier Issues",
        "Hourly Departure Congestion and Delay Cascading Trends",
        "Busiest Route Analysis by Flight Volume and Average Flight Duration"
      ],
      plannedAnalytics: [
        "Predictive Aircraft Turnaround Delay Propagation Models",
        "Seasonal Route Optimization Recommendations based on Historical Wind/Weather Patterns",
        "CO2 Emissions and Fuel Burn Estimations based on Taxi Time and Air Mileage"
      ]
    },
    engineeringDecisions: [
      "Selected partition columns `Year` and `Month` rather than `Day` to prevent the small file problem in Spark while optimizing quarterly analytical reporting.",
      "Used role-playing dimensions for airports to maintain a single conformed airport table while supporting origin and destination analysis cleanly.",
      "Tested Microsoft Fabric OneLake integration to evaluate unified zero-copy querying between Spark notebooks and Power BI Direct Lake mode."
    ],
    whatThisDemonstrates: [
      "Processing and transforming large-scale real-world public datasets with PySpark",
      "Medallion architecture design with Delta Lake partition optimization",
      "Star schema design with role-playing dimensions",
      "Microsoft Fabric Lakehouse and OneLake hands-on capabilities",
      "Separating implemented metrics from planned analytical enhancements honestly"
    ],
    architectureDiagramType: "flight"
  },
  {
    id: "local-etl-platform",
    title: "Local Enterprise ETL & Data Pipeline Platform",
    shortTitle: "Local Enterprise ETL",
    subtitle: "Containerized, distributed batch processing engine built with Apache Spark, Airflow & PostgreSQL",
    domain: "Enterprise Data Infrastructure",
    featured: true,
    categories: ["Spark", "Python", "Databases", "Orchestration", "Docker", "ETL"],
    technologies: [
      "Apache Spark",
      "PySpark",
      "Apache Airflow",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "GitLab",
      "Jenkins",
      "Python",
      "SQL",
      "Bash"
    ],
    architectureSummary:
      "Source Data → Apache Airflow DAGs → Distributed Spark Cluster (Master + Workers) → Staging → PostgreSQL Data Warehouse → Analytics",
    businessProblem:
      "Relying solely on managed cloud services can abstract away the underlying distributed architecture of big data systems. Understanding how a distributed compute cluster communicates, how orchestration workers trigger headless jobs, and how containerized networks interact is essential for debugging enterprise production pipelines.",
    solutionOverview:
      "Engineered an on-premises enterprise data pipeline and compute cluster entirely locally using Docker Compose. The environment orchestrates a standalone Apache Spark cluster (1 Master, 2 Workers), an Apache Airflow scheduler and webserver, and a PostgreSQL database serving as both metadata repository and target analytical data warehouse, backed by automated CI/CD pipeline concepts.",
    engineeringWork: [
      "Configured multi-container Docker Compose infrastructure with isolated bridge networks for Spark, Airflow, and PostgreSQL.",
      "Provisioned a distributed Apache Spark cluster with 1 Spark Master node and 2 Spark Worker nodes with custom resource allocations.",
      "Authored custom Apache Airflow DAGs implementing task dependencies, retries, exponential backoffs, and execution alerting.",
      "Implemented modular Python ETL packages following separation of concerns (extractors, transformers, loaders, validators).",
      "Engineered PostgreSQL database schema with indexing, primary key constraints, and upsert (ON CONFLICT DO UPDATE) merge logic.",
      "Designed Jenkins and GitLab CI pipeline workflows to run automated syntax checks and unit tests before DAG deployment."
    ],
    keyCapabilities: [
      "Hands-on cluster engineering: distributed compute with Spark Master and multi-worker execution",
      "Automated DAG orchestration with Apache Airflow including sensor tasks and dependency management",
      "Production-grade containerization with Docker and Docker Compose",
      "Local staging and incremental loading into PostgreSQL with surrogate key assignment"
    ],
    dataFlowSteps: [
      { step: "01", title: "Source Files", desc: "Batch CSV and JSON transaction logs stored on mounted Docker volumes", tech: "Local Filesystem" },
      { step: "02", title: "Airflow Trigger", desc: "Airflow scheduler initiates pipeline DAG based on cron schedule", tech: "Apache Airflow" },
      { step: "03", title: "Spark Submit", desc: "Airflow executes spark-submit job to the Spark Master container", tech: "PySpark / Spark Master" },
      { step: "04", title: "Distributed Compute", desc: "Spark Workers parallelize partition processing and data transformations", tech: "Spark Worker Nodes" },
      { step: "05", title: "PostgreSQL Load", desc: "JDBC connection writing cleansed records with upsert conflict handling", tech: "PostgreSQL / SQL" },
      { step: "06", title: "CI/CD Deployment", desc: "GitLab repository triggers Jenkins build checking DAG syntax and code formatting", tech: "GitLab / Jenkins" }
    ],
    dataModelInfo: {
      type: "Normalized Staging & Relational Data Warehouse",
      facts: ["fact_transactions (transaction_id, account_id, merchant_id, date_id, amount, status)"],
      dimensions: [
        "dim_account (account_id, customer_name, account_type, created_at)",
        "dim_merchant (merchant_id, merchant_name, category, country)",
        "dim_calendar (date_id, calendar_date, day, month, year, is_business_day)"
      ],
      description: "PostgreSQL tables optimized with B-tree indexes on foreign keys and date IDs for rapid aggregations."
    },
    pipelineDesign: {
      ingestion: "Airflow FileSensor detecting file presence in designated staging volume before triggering downstream Spark tasks.",
      transformation: "PySpark script converting messy raw inputs, applying regex string cleansing, casting numeric currencies, and assigning surrogate keys.",
      qualityChecks: [
        "File availability and non-zero byte size verification",
        "Row count parity checks between extracted input and loaded PostgreSQL table",
        "Primary key uniqueness verification post-load",
        "Graceful failure alerting and execution retry policies"
      ]
    },
    analyticsInfo: {
      implementedAnalytics: [
        "Daily Transaction Volume and Gross Revenue Trends",
        "Failed vs Successful Transaction Ratios by Merchant Category",
        "Top 10 High-Velocity Accounts by Transaction Frequency"
      ],
      plannedAnalytics: [
        "Automated Anomaly Detection for Outlier Transaction Amounts",
        "Dynamic Spark Executor Autoscaling based on Volume Backlog"
      ]
    },
    engineeringDecisions: [
      "Used Docker Compose to replicate production network isolation and eliminate dependency conflicts across Spark, Airflow, and PostgreSQL.",
      "Implemented idempotent loads using SQL upserts to ensure DAG re-runs do not duplicate transaction records.",
      "Separated Spark Master and Worker containers to gain hands-on visibility into memory allocation, shuffle partitions, and worker task distribution."
    ],
    whatThisDemonstrates: [
      "Data engineering competence beyond managed cloud GUIs",
      "Deep understanding of distributed computing (Spark Master/Worker mechanics)",
      "Orchestration workflows and dependency trees in Apache Airflow",
      "Docker containerization and multi-service networking",
      "CI/CD deployment concepts with GitLab and Jenkins"
    ],
    architectureDiagramType: "local-etl"
  },
  {
    id: "finguard-streaming",
    title: "FinGuard — Streaming Data Engineering Project",
    shortTitle: "FinGuard Streaming Project",
    subtitle: "Real-time streaming ingestion and financial transaction pipeline demonstrating bronze/silver architecture",
    domain: "FinTech & Financial Crime Prevention",
    featured: true,
    categories: ["Python", "Spark", "SQL", "ETL", "Lakehouse"],
    technologies: [
      "Python",
      "Apache Spark",
      "PySpark",
      "Streaming Ingestion",
      "Bronze/Silver Architecture",
      "Data Cleansing",
      "Data Validation",
      "Git",
      "GitHub"
    ],
    architectureSummary:
      "Financial Transaction Feeds → Streaming Ingestion → Raw Bronze Store → PySpark Transformations → Silver Cleansed Tables → Analytics Ready",
    businessProblem:
      "Financial institutions process high-frequency payment streams where delayed or malformed transaction records can jeopardize fraud monitoring, customer notifications, and risk auditing. Batch processing alone cannot satisfy requirements for rapid transaction verification and anomalous pattern flags.",
    solutionOverview:
      "Engineered the FinGuard streaming data pipeline as documented in the GitHub repository. Demonstrates experience with streaming-oriented data engineering patterns, ingestion of rapid event data, medallion bronze/silver segregation, and real-time schema validation.",
    engineeringWork: [
      "Structured streaming data ingestion pipeline ingesting continuous financial transaction events.",
      "Implemented Medallion bronze layer capturing raw incoming payloads with ingestion audit timestamps.",
      "Developed PySpark streaming transformations parsing nested JSON payloads into structured tabular formats.",
      "Built validation gates flagging invalid currencies, negative amounts, and malformed account IDs into dead-letter storage.",
      "Configured modular Python architecture with clean repository organization and documentation."
    ],
    keyCapabilities: [
      "Hands-on experience with streaming-oriented data engineering paradigms",
      "Bronze to Silver Medallion architecture implementation for event data",
      "Automated payload schema parsing and validation checks",
      "Publicly audited code repository on GitHub"
    ],
    dataFlowSteps: [
      { step: "01", title: "Transaction Stream", desc: "Simulated high-frequency card and bank transaction payloads", tech: "Streaming Events" },
      { step: "02", title: "Streaming Ingestion", desc: "Real-time ingestion engine reading event streams continuously", tech: "Python / Spark" },
      { step: "03", title: "Bronze Storage", desc: "Raw events stored append-only preserving complete fidelity", tech: "Bronze Delta Store" },
      { step: "04", title: "Silver Transformation", desc: "Parsing JSON strings, casting datatypes, and applying validation rules", tech: "PySpark Processing" },
      { step: "05", title: "Curated Stream", desc: "Cleansed, structured transactions ready for downstream analytics and alerting", tech: "Silver Tier" }
    ],
    dataModelInfo: {
      type: "Event Stream Schema & Silver Curated Table",
      facts: ["stream_transactions (event_id, transaction_timestamp, sender_account, receiver_account, amount, currency, channel)"],
      dimensions: ["dim_risk_categories (category_id, code, risk_level, threshold)"],
      description: "Structured relational representation extracted from raw semi-structured JSON streaming messages."
    },
    pipelineDesign: {
      ingestion: "Continuous event stream ingestion writing to persistent append-only storage.",
      transformation: "Streaming transformations validating schema compliance, standardizing currency formatting, and dropping duplicate message IDs.",
      qualityChecks: [
        "Positive transaction value validation (`amount > 0`)",
        "Standard ISO-4217 currency code verification",
        "Duplicate transaction ID filtering within sliding event windows"
      ]
    },
    analyticsInfo: {
      implementedAnalytics: [
        "Real-Time Transaction Throughput (Events per Second)",
        "Currency Distribution and High-Value Transaction Ratios",
        "Validation Error and Dropped Payload Rates"
      ],
      plannedAnalytics: [
        "Sliding Window Velocity Checks for Fraud Detection Patterns",
        "Integration with Real-Time Dashboarding Alerts"
      ]
    },
    engineeringDecisions: [
      "Applied Bronze/Silver architecture to decouple raw event capture from analytical cleansing, guaranteeing zero message loss.",
      "Encapsulated configuration in modular environment files to ensure reproducibility across developer machines."
    ],
    whatThisDemonstrates: [
      "Experience with streaming data engineering principles and event data",
      "Real-world code craftsmanship publicly verifiable on GitHub",
      "PySpark streaming transformations and schema validation",
      "Medallion architecture applied to time-sensitive event streams"
    ],
    githubUrl: "https://github.com/databeli/finguard_streaming_project",
    architectureDiagramType: "flight"
  },
  {
    id: "enterprise-sales-dw",
    title: "Enterprise Sales Data Warehouse & BI Analytics",
    shortTitle: "Enterprise Sales Warehouse",
    subtitle: "End-to-end Kimball dimensional data warehouse with star schema and executive Power BI reporting",
    domain: "Retail & Enterprise Commerce",
    featured: false,
    categories: ["SQL", "Data Warehouse", "Power BI", "Python", "ETL", "Analytics"],
    technologies: [
      "SQL",
      "Data Warehousing",
      "Dimensional Modeling",
      "Star Schema",
      "Fact Tables",
      "Dimension Tables",
      "ETL",
      "Power BI",
      "DAX",
      "PostgreSQL / SQL Server",
      "Python"
    ],
    architectureSummary:
      "Source Sales Data → Staging Database → SQL ETL Transformations → Dimensions & Facts (Star Schema) → Power BI Semantic Model → Business Analytics",
    businessProblem:
      "An enterprise retail organization struggled with sluggish, conflicting sales reporting due to transactional OLTP database querying. Business leaders needed a centralized analytical repository providing single-source-of-truth visibility into gross revenue, regional performance, customer cohorts, and product profitability across historical quarters.",
    solutionOverview:
      "Designed and constructed a Kimball-compliant Enterprise Sales Data Warehouse featuring a Star Schema model. Built an ETL process staging raw sales, customer, store, and inventory tables, cleaning anomalies, assigning integer surrogate keys, modeling central Fact tables, and delivering executive Power BI dashboards powered by robust DAX measures.",
    engineeringWork: [
      "Architected Kimball Star Schema featuring `FactSales`, `FactInventorySnapshot`, and conformed dimensions.",
      "Engineered automated SQL ETL scripts transforming denormalized transactional receipts into structured dimensions.",
      "Implemented Slowly Changing Dimension (SCD Type 1 and Type 2) logic using SQL MERGE statements.",
      "Authored optimized indexing strategies (clustered columnstore & B-tree) accelerating aggregation queries.",
      "Constructed Power BI semantic model with star schema relationships (1-to-many, single direction) and DAX measures."
    ],
    keyCapabilities: [
      "Kimball dimensional design: clean Fact and Dimension separation with integer surrogate keys",
      "Advanced SQL transformations: CTEs, window functions, and MERGE upsert scripts",
      "Power BI semantic model with high-performance DAX time-intelligence calculations",
      "Auditable staging-to-warehouse ETL workflow with reconciliation row counts"
    ],
    dataFlowSteps: [
      { step: "01", title: "Source Orders", desc: "OLTP sales transactions, customer profiles, product catalog feeds", tech: "CSV / RDBMS" },
      { step: "02", title: "Staging Area", desc: "Raw load into staging schema without datatype alterations", tech: "SQL Staging Schema" },
      { step: "03", title: "Dimension ETL", desc: "Deduplication, surrogate key generation, and SCD handling", tech: "SQL Stored Procedures" },
      { step: "04", title: "Fact Loading", desc: "Foreign key lookups joining dimensions to populate FactSales", tech: "SQL MERGE / INSERT" },
      { step: "05", title: "Power BI Semantic Model", desc: "Star schema relationships with one-to-many single directional filtering", tech: "Power BI / DAX" }
    ],
    dataModelInfo: {
      type: "Kimball Star Schema",
      facts: [
        "Fact_Sales (SalesKey, OrderNumber, CustomerKey, ProductKey, StoreKey, DateKey, Quantity, UnitPrice, DiscountAmount, NetSales, TaxAmount, CostAmount, Margin)"
      ],
      dimensions: [
        "Dim_Customer (CustomerKey [SK], CustomerId, CustomerName, Segment, City, State, PostalCode)",
        "Dim_Product (ProductKey [SK], ProductId, ProductName, Category, SubCategory, UnitCost, UnitPrice)",
        "Dim_Store (StoreKey [SK], StoreId, StoreName, StoreType, Region, Country)",
        "Dim_Date (DateKey [SK], Date, Year, Quarter, Month, Week, DayOfWeek, FiscalYear)"
      ],
      description: "Strict star schema where all dimensions join directly to FactSales via integer surrogate keys."
    },
    pipelineDesign: {
      ingestion: "Scheduled batch ETL script loading transactional increments into dedicated staging tables.",
      transformation: "SQL stored procedures executing surrogate key lookups, calculating net margin, and inserting into fact tables.",
      qualityChecks: [
        "Zero orphan foreign keys (all customer and product IDs resolve to valid dimension surrogate keys)",
        "Positive quantity and valid monetary constraint checks",
        "Reconciliation check: `SUM(NetSales)` in staging matches `SUM(NetSales)` in FactSales"
      ]
    },
    analyticsInfo: {
      implementedAnalytics: [
        "Total Revenue, Gross Profit Margin, and Unit Sales by Region",
        "Year-over-Year (YoY) and Month-over-Month (MoM) Growth DAX Calculations",
        "Top 10 Most Profitable Product Categories and Sub-Categories",
        "Customer Segment Lifetime Value (LTV) Contribution"
      ],
      plannedAnalytics: [
        "Basket Analysis & Cross-Sell Recommendation Matrix",
        "Inventory Stockout Probability Alerting"
      ]
    },
    engineeringDecisions: [
      "Enforced single-direction 1-to-many filter relationships in Power BI to guarantee predictable query behavior and eliminate ambiguity.",
      "Used integer surrogate keys (`YYYYMMDD` for date, auto-increment integers for entities) rather than natural composite strings to maximize join speed."
    ],
    whatThisDemonstrates: [
      "Deep understanding of Kimball dimensional data warehousing principles",
      "Expertise writing complex SQL DDL, DML, and MERGE procedures",
      "Power BI semantic modeling with Star Schema best practices",
      "Translating business requirements into structured analytical models"
    ],
    architectureDiagramType: "sales"
  },
  {
    id: "synthea-healthcare",
    title: "Synthea Healthcare Data Platform",
    shortTitle: "Synthea Healthcare Pipeline",
    subtitle: "End-to-end Medallion data engineering pipeline processing synthetic EHR records with Databricks & ADLS Gen2",
    domain: "Clinical Informatics & Synthetic EHR",
    featured: false,
    categories: ["Azure", "Databricks", "Spark", "SQL", "Lakehouse", "Healthcare", "ETL"],
    technologies: [
      "Synthea Synthetic EHR",
      "Azure Data Lake Storage Gen2",
      "Azure Databricks",
      "Apache Spark",
      "PySpark",
      "SQL",
      "Medallion Architecture",
      "Delta Lake",
      "Dimensional Modeling"
    ],
    architectureSummary:
      "Synthea EHR Feeds → Landing → Raw Storage → Bronze Delta → Silver Cleansed → Gold Aggregates → Clinical Analytics",
    businessProblem:
      "Healthcare data engineers must understand the intricate relationships between patient profiles, longitudinal clinical encounters, medical conditions, medications, allergies, and diagnostic observations without exposing protected health information (PHI) during pipeline development and testing.",
    solutionOverview:
      "Built an end-to-end healthcare data platform using open-source Synthea synthetic electronic health records. Ingested large volumes of complex relational medical entities into ADLS Gen2, orchestrated PySpark transformations across Bronze, Silver, and Gold Medallion stages in Azure Databricks, and modeled patient clinical journeys.",
    engineeringWork: [
      "Ingested 7+ clinical entities (Patients, Encounters, Conditions, Procedures, Medications, Observations, Allergies) into ADLS Gen2.",
      "Structured multi-stage Medallion architecture with Delta Lake format.",
      "Engineered PySpark transformation logic parsing complex SNOMED-CT and RxNorm clinical codes.",
      "Handled one-to-many temporal relationships between patient encounters and longitudinal diagnostic observations.",
      "Built automated data cleansing resolving overlapping observation timestamps and standardized units of measure."
    ],
    keyCapabilities: [
      "Hands-on Medallion architecture built on Azure Databricks and ADLS Gen2",
      "Deep domain familiarity with clinical entities (SNOMED, RxNorm, encounters, conditions)",
      "Distributed PySpark transformations handling complex entity relationships",
      "Clean separation of raw staging, cleansed silver, and analytical gold tables"
    ],
    dataFlowSteps: [
      { step: "01", title: "Synthea Generation", desc: "Realistic synthetic electronic health records generated across clinical domains", tech: "Synthea Engine" },
      { step: "02", title: "Landing Ingestion", desc: "Batch copy to ADLS Gen2 landing container preserving raw CSVs", tech: "ADLS Gen2" },
      { step: "03", title: "Bronze Delta", desc: "Append-only Delta tables with ingestion metadata and lineage tags", tech: "Azure Databricks" },
      { step: "04", title: "Silver Normalization", desc: "Deduplication, datetime standardization, and clinical code normalization", tech: "PySpark DataFrames" },
      { step: "05", title: "Gold Clinical Models", desc: "Patient encounter summaries and chronic condition cohort aggregates", tech: "Delta Gold / SQL" }
    ],
    dataModelInfo: {
      type: "Clinical Dimensional Model",
      facts: [
        "fact_encounter (encounter_id, patient_id, provider_id, start_date, end_date, code, description, cost)",
        "fact_observation (observation_id, patient_id, encounter_id, observation_date, code, value, units)"
      ],
      dimensions: [
        "dim_patient (patient_id, birth_date, gender, race, ethnicity, address)",
        "dim_condition (condition_id, code, system, description)",
        "dim_medication (medication_id, code, description, dosage)"
      ],
      description: "Clinical schema enabling longitudinal analysis of patient chronic disease progression and encounter costs."
    },
    pipelineDesign: {
      ingestion: "Scheduled PySpark job reading from ADLS Gen2 and writing to Bronze Delta tables.",
      transformation: "Spark transformations converting dates, filtering incomplete encounter records, and joining condition codes to standard descriptions.",
      qualityChecks: [
        "Patient ID referential integrity across all child tables (Encounters, Observations, Medications)",
        "Valid clinical code format checks",
        "Chronological sanity checks (Observation Date must fall within Encounter Date window)"
      ]
    },
    analyticsInfo: {
      implementedAnalytics: [
        "Prevalence of Chronic Conditions (Diabetes, Hypertension) across Age Brackets",
        "Average Inpatient Encounter Duration and Procedure Costs",
        "Distribution of Common Prescription Medications by Clinical Condition"
      ],
      plannedAnalytics: [
        "Comorbidity Index Calculations across Longitudinal Cohorts",
        "Clinical Observation Trend Tracking over Multi-Year Visits"
      ]
    },
    engineeringDecisions: [
      "Used Synthea datasets to mirror realistic enterprise EHR complexity while preserving privacy.",
      "Employed Delta Lake format to benefit from ACID transactions, schema enforcement, and efficient upsert operations during incremental reloads."
    ],
    whatThisDemonstrates: [
      "Healthcare domain data engineering expertise",
      "Medallion architecture execution on Azure Databricks",
      "Handling normalized and denormalized clinical data entities",
      "ADLS Gen2 storage organization and best practices"
    ],
    architectureDiagramType: "synthea"
  }
];

export const SQL_SHOWCASE: SqlSnippet[] = [
  {
    id: "window-functions",
    title: "Advanced Window Functions & Ranking",
    category: "Window Functions",
    description: "Partitioned ranking and lead/lag calculations for event sequence analysis and deduplication.",
    concept: "ROW_NUMBER(), DENSE_RANK(), LAG(), LEAD() over dynamic partitions",
    businessContext: "Extracting the most recent patient encounter, calculating time gaps between flight legs, and identifying customer re-engagement periods.",
    code: `-- Identify the latest patient encounter and calculate elapsed days since prior visit
WITH RankedEncounters AS (
  SELECT
    patient_id,
    encounter_id,
    encounter_date,
    acuity_level,
    -- Rank encounters per patient chronologically
    ROW_NUMBER() OVER (
      PARTITION BY patient_id 
      ORDER BY encounter_date DESC
    ) AS recency_rank,
    -- Retrieve the previous encounter timestamp for interval calculation
    LAG(encounter_date, 1) OVER (
      PARTITION BY patient_id 
      ORDER BY encounter_date ASC
    ) AS prev_encounter_date
  FROM silver.encounters
  WHERE is_valid = 1
)
SELECT
  patient_id,
  encounter_id,
  encounter_date,
  DATEDIFF(day, prev_encounter_date, encounter_date) AS days_since_prior_visit,
  CASE 
    WHEN recency_rank = 1 THEN 'Current Active Encounter'
    ELSE 'Historical Encounter'
  END AS encounter_status
FROM RankedEncounters
WHERE recency_rank <= 5;`
  },
  {
    id: "complex-cte",
    title: "Multi-Stage Common Table Expressions (CTEs)",
    category: "CTEs & Pipeline Logic",
    description: "Modular, readable query structuring breaking down multi-step data transformations into isolated stages.",
    concept: "Chained CTEs, conditional aggregation, and NULL handling",
    businessContext: "Aggregating airline carrier performance, calculating delay proportions, and assigning performance tiers in a single query.",
    code: `-- Modular multi-stage aggregation calculating carrier performance tiers
WITH CleanedFlights AS (
  SELECT
    carrier_code,
    flight_date,
    COALESCE(dep_delay_minutes, 0) AS dep_delay,
    COALESCE(arr_delay_minutes, 0) AS arr_delay,
    CASE WHEN cancelled_flag = 1 THEN 1 ELSE 0 END AS is_cancelled
  FROM silver.flight_performance
  WHERE flight_date >= DATEADD(month, -3, CURRENT_DATE())
),
CarrierAggregates AS (
  SELECT
    carrier_code,
    COUNT(*) AS total_scheduled_flights,
    SUM(is_cancelled) AS total_cancelled,
    AVG(CASE WHEN is_cancelled = 0 THEN dep_delay ELSE NULL END) AS avg_dep_delay,
    SUM(CASE WHEN arr_delay <= 15 AND is_cancelled = 0 THEN 1 ELSE 0 END) AS on_time_arrivals
  FROM CleanedFlights
  GROUP BY carrier_code
  HAVING COUNT(*) >= 100 -- Focus on statistically significant carriers
),
MetricsScoring AS (
  SELECT
    carrier_code,
    total_scheduled_flights,
    ROUND((CAST(on_time_arrivals AS FLOAT) / total_scheduled_flights) * 100, 2) AS on_time_pct,
    ROUND((CAST(total_cancelled AS FLOAT) / total_scheduled_flights) * 100, 2) AS cancellation_pct,
    ROUND(avg_dep_delay, 1) AS avg_delay_minutes
  FROM CarrierAggregates
)
SELECT
  carrier_code,
  total_scheduled_flights,
  on_time_pct,
  cancellation_pct,
  avg_delay_minutes,
  CASE
    WHEN on_time_pct >= 85.0 AND cancellation_pct < 1.5 THEN 'Tier 1 - Exemplary'
    WHEN on_time_pct >= 75.0 THEN 'Tier 2 - Reliable'
    ELSE 'Tier 3 - Action Required'
  END AS performance_grade
FROM MetricsScoring
ORDER BY on_time_pct DESC;`
  },
  {
    id: "incremental-merge",
    title: "Incremental Loading & SCD Type 2 MERGE",
    category: "Data Warehousing",
    description: "Atomic upsert pattern updating changed dimensions while tracking historical attribute evolution.",
    concept: "MERGE statements, surrogate keys, valid_from / valid_to timestamps",
    businessContext: "Maintaining customer address and tier changes in dimension tables without overwriting historical transaction context.",
    code: `-- Slowly Changing Dimension Type 2 (SCD2) Pattern with MERGE
MERGE INTO gold.dim_customer AS Target
USING (
  SELECT
    src.customer_id,
    src.customer_name,
    src.segment,
    src.city,
    src.state,
    src.updated_at AS effective_start_date
  FROM staging.stg_customer_updates AS src
) AS Source
ON Target.customer_id = Source.customer_id 
   AND Target.is_current = 1

-- When attributes have changed: expire the current record
WHEN MATCHED AND (
  Target.segment <> Source.segment OR 
  Target.city <> Source.city OR 
  Target.state <> Source.state
) THEN
  UPDATE SET 
    Target.effective_end_date = Source.effective_start_date,
    Target.is_current = 0

-- Insert new records directly as current active records
WHEN NOT MATCHED THEN
  INSERT (
    customer_id, 
    customer_name, 
    segment, 
    city, 
    state, 
    effective_start_date, 
    effective_end_date, 
    is_current
  )
  VALUES (
    Source.customer_id,
    Source.customer_name,
    Source.segment,
    Source.city,
    Source.state,
    Source.effective_start_date,
    '9999-12-31',
    1
  );`
  },
  {
    id: "advanced-joins",
    title: "Advanced JOIN Strategies & NULL Handling",
    category: "Query Optimization",
    description: "Leveraging specific join types and coalesce fallbacks for complete data integrity across disparate sources.",
    concept: "LEFT, RIGHT, FULL OUTER JOINs, NULLIF, COALESCE, Anti-Joins",
    businessContext: "Reconciling staging inventory against warehouse product masters to identify untracked items and unmatched transactions.",
    code: `-- Anti-join and reconciliation query identifying catalog discrepancies
SELECT
  s.product_id AS staged_product_id,
  s.product_name AS staged_product_name,
  s.batch_received_date,
  COALESCE(d.product_key, -1) AS resolved_surrogate_key,
  CASE
    WHEN d.product_key IS NULL THEN 'Unregistered Product in Staging'
    WHEN s.unit_price <> d.current_unit_price THEN 'Price Drift Detected'
    ELSE 'Fully Reconciled'
  END AS audit_status
FROM staging.stg_incoming_inventory AS s
LEFT JOIN gold.dim_product AS d
  ON s.product_id = d.product_id 
  AND d.is_current = 1
WHERE 
  d.product_key IS NULL 
  OR s.unit_price <> d.current_unit_price;`
  },
  {
    id: "star-schema-ddl",
    title: "Star Schema DDL & Surrogate Key Design",
    category: "Data Modeling",
    description: "Production-grade DDL defining fact and dimension tables with constraints and clustered columnstores.",
    concept: "Primary/Foreign Keys, Clustered Columnstore, Partitioning, Surrogate Keys",
    businessContext: "Creating clean Kimball structures in SQL Server or Synapse Analytics for enterprise sales reporting.",
    code: `-- Production DDL: Kimball Star Schema for Enterprise Sales Analytics
CREATE TABLE gold.dim_date (
  date_key INT NOT NULL PRIMARY KEY, -- Format: YYYYMMDD
  full_date DATE NOT NULL,
  day_of_week TINYINT NOT NULL,
  day_name VARCHAR(15) NOT NULL,
  month_number TINYINT NOT NULL,
  month_name VARCHAR(15) NOT NULL,
  quarter_number TINYINT NOT NULL,
  calendar_year SMALLINT NOT NULL,
  is_weekend BIT NOT NULL
);

CREATE TABLE gold.dim_product (
  product_key INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  product_id VARCHAR(50) NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  category_name VARCHAR(100) NOT NULL,
  sub_category_name VARCHAR(100) NOT NULL,
  standard_cost DECIMAL(18,2) NOT NULL,
  list_price DECIMAL(18,2) NOT NULL,
  is_active BIT DEFAULT 1
);

CREATE TABLE gold.fact_sales (
  sales_key BIGINT IDENTITY(1,1) NOT NULL,
  order_number VARCHAR(50) NOT NULL,
  date_key INT NOT NULL,
  product_key INT NOT NULL,
  customer_key INT NOT NULL,
  store_key INT NOT NULL,
  quantity INT NOT NULL CHECK (quantity > 0),
  unit_price DECIMAL(18,2) NOT NULL,
  discount_amount DECIMAL(18,2) DEFAULT 0.00,
  net_sales_amount AS (quantity * unit_price - discount_amount) PERSISTED,
  CONSTRAINT FK_FactSales_Date FOREIGN KEY (date_key) REFERENCES gold.dim_date(date_key),
  CONSTRAINT FK_FactSales_Product FOREIGN KEY (product_key) REFERENCES gold.dim_product(product_key)
);

-- Clustered Columnstore Index for high-concurrency analytical aggregations
CREATE CLUSTERED COLUMNSTORE INDEX CCI_FactSales ON gold.fact_sales;`
  }
];

export const CONCEPTS: ConceptItem[] = [
  {
    id: "etl-vs-elt",
    title: "ETL vs. ELT Paradigms",
    category: "Architecture",
    summary: "Understanding when to transform data before loading versus utilizing high-power cloud data warehouses for post-load transformation.",
    details: [
      "ETL (Extract, Transform, Load): Cleanses and structures data in memory (e.g. Python scripts or dedicated transform servers) before loading into destination tables. Ideal for on-premises databases with limited compute or when strict compliance mandates filtering before storage.",
      "ELT (Extract, Load, Transform): Ingests raw data directly into scalable cloud storage or lakehouses (Bronze/Staging), leveraging distributed compute (Spark, Synapse, Fabric, Snowflake) to execute transformations at scale.",
      "Modern Practice: Utilizing ELT within Medallion architectures preserves raw source fidelity while enabling flexible, reproducible downstream modeling."
    ],
    engineeringTradeoff: "ELT requires robust cloud storage and compute governance, whereas ETL can create bottlenecks on transformation middleware."
  },
  {
    id: "batch-vs-incremental",
    title: "Batch Processing vs. Incremental Loading",
    category: "Pipelines",
    summary: "Balancing the simplicity of full snapshot replacement against the efficiency of high-volume incremental delta loads.",
    details: [
      "Full Batch Load: Truncates and reloads entire target tables. Feasible for small reference dimensions, but computationally prohibitive and slow on large transaction volumes.",
      "Incremental Loading: Identifies only inserted or updated records using watermarks (`last_modified_timestamp`), auto-incrementing surrogate IDs, or Change Data Capture (CDC).",
      "Idempotency: Ensuring re-running an incremental pipeline for an identical timeframe produces exactly the same result without duplicate rows."
    ],
    engineeringTradeoff: "Incremental loading drastically cuts compute costs and execution windows, but requires robust deduplication and watermark state management."
  },
  {
    id: "medallion-architecture",
    title: "Medallion Architecture (Bronze → Silver → Gold)",
    category: "Lakehouse Design",
    summary: "Organizing multi-hop data refinement inside modern lakehouse platforms like Databricks and Microsoft Fabric.",
    details: [
      "Bronze (Raw Layer): Append-only ingestion zone preserving original source records with audit timestamps and lineage metadata. Zero loss of raw source fidelity.",
      "Silver (Cleansed & Conformed): Standardized data types, filtered anomalies, deduplicated entities, and enriched reference values with strict schema enforcement.",
      "Gold (Curated & Analytical): Business-level aggregates and Kimball dimensional models (Star Schemas) optimized for low-latency BI dashboards and executive KPIs."
    ],
    engineeringTradeoff: "Maintains clear data lineage and debugging traceability at the expense of managing storage across three distinct tiers."
  },
  {
    id: "star-vs-snowflake",
    title: "Star Schema vs. Snowflake Schema",
    category: "Dimensional Modeling",
    summary: "Evaluating denormalized dimension designs versus normalized hierarchies for analytical query performance.",
    details: [
      "Star Schema: Denormalized dimension tables connecting directly to a central Fact table in a single hop. Highly optimized for Power BI, reducing join overhead and simplifying user query authoring.",
      "Snowflake Schema: Normalized dimensions where sub-categories split into secondary tables. Reduces storage redundancy, but introduces multi-hop table joins that can degrade analytical dashboard latency.",
      "Data Warehousing Best Practice: Prefer Star Schemas in columnar analytical databases and Power BI models to maximize compression and query speed."
    ],
    engineeringTradeoff: "Star schemas duplicate descriptive strings in dimensions to achieve simpler queries, while snowflake schemas save modest disk space at the cost of query complexity."
  },
  {
    id: "data-quality-gates",
    title: "Data Quality & Automated Validation Gates",
    category: "Reliability",
    summary: "Preventing silent data corruption from reaching executive dashboards through proactive validation checks.",
    details: [
      "Completeness Checks: Verifying non-null primary keys and required business attributes.",
      "Referential Integrity: Ensuring foreign keys in Fact tables successfully resolve to surrogate keys in conformed Dimensions.",
      "Domain Consistency: Validating allowable ranges (e.g. positive monetary values, valid ISO currency codes, chronological timestamp ordering).",
      "Volume Anomaly Detection: Alerting when daily batch record counts drop below expected thresholds."
    ],
    engineeringTradeoff: "Strict quality gates can pause pipelines if unexpected schema drifts occur, requiring dead-letter routing to prevent entire job termination."
  },
  {
    id: "partitioning-distributed",
    title: "Partitioning & Distributed Processing",
    category: "Big Data & Spark",
    summary: "Maximizing parallel compute in Apache Spark and preventing common pitfalls like the small file problem.",
    details: [
      "Partitioning Strategy: Partitioning datasets by coarse time attributes (Year/Month) or high-level domains to allow query engines to skip unneeded files completely (partition pruning).",
      "Small File Problem: Too many granular partitions (e.g. partitioning by minute or low-cardinality keys) generate thousands of tiny files, overwhelming storage metadata and degrading Spark performance.",
      "Shuffle Management: Minimizing expensive wide transformations across cluster nodes through broadcast joins on small lookup tables."
    ],
    engineeringTradeoff: "Careful partition column selection drastically accelerates downstream queries while improper partition cardinality can crash Spark executors."
  }
];

export const FABRIC_COMPONENTS = [
  {
    title: "OneLake",
    role: "Unified SaaS Data Lake",
    badge: "Storage Foundation",
    description: "The 'OneDrive for data' — a single, unified, logical data lake for the entire organization that eliminates data silos through Open Delta Parquet format and zero-copy shortcuts.",
    analogy: "Single centralized file cabinet across all cloud storage."
  },
  {
    title: "Fabric Lakehouse",
    role: "Data Engineering & Spark Compute",
    badge: "Big Data & Delta",
    description: "Combines the flexibility of file-based data lakes with the ACID compliance of relational databases. Supports Apache Spark notebooks, PySpark transformations, and Medallion architectures.",
    analogy: "The workshop where raw data is refined into structured Delta tables."
  },
  {
    title: "Fabric Data Warehouse",
    role: "Relational T-SQL Engine",
    badge: "Structured Analytics",
    description: "Enterprise data warehouse supporting full ACID transactions, cross-database queries, standard T-SQL syntax, and columnar storage optimized for business intelligence queries.",
    analogy: "The curated library where structured tables are organized for rapid SQL access."
  },
  {
    title: "Fabric Pipelines",
    role: "Orchestration & Ingestion",
    badge: "Data Factory Inside Fabric",
    description: "Serverless orchestration combining the best of Azure Data Factory with cloud scalability, enabling parameterized batch ingestion, triggers, and dependency management.",
    analogy: "The automated conveyor belts moving data between sources and storage."
  },
  {
    title: "Power BI Direct Lake",
    role: "Semantic Modeling & Visualization",
    badge: "Zero-Latency BI",
    description: "Groundbreaking Direct Lake mode loads Delta Parquet tables straight from OneLake into the Power BI VertiPaq engine without importing or duplicating data, providing instant query response.",
    analogy: "The executive display projecting live warehouse insights directly to users."
  }
];

export const ON_PREM_ADVANTAGES = [
  {
    title: "Deep Relational Foundation",
    description: "Extensive hands-on experience building and tuning schemas in SQL Server, Oracle, PostgreSQL, and MySQL using tools like SSMS and DBeaver.",
    icon: "database"
  },
  {
    title: "Procedural Logic & Stored Procedures",
    description: "Proficiency with T-SQL and PL/SQL for encapsulating complex data logic, cursor operations, error handling, and transaction management.",
    icon: "code"
  },
  {
    title: "Bridge to Modern Cloud",
    description: "Understanding legacy database architectures makes it seamless to design cloud migration pipelines (e.g. Oracle OLTP → Azure Data Factory → ADLS Gen2).",
    icon: "git-merge"
  },
  {
    title: "Performance & Index Tuning",
    description: "Real-world exposure to execution plans, B-tree indexes, clustered tables, and query bottlenecks before relying on cloud autoscaling.",
    icon: "zap"
  }
];

export const EXPERIENCE_TIMELINE = [
  {
    period: "Past Year — Present",
    role: "Junior Data Engineer",
    positioning: "Professional experience in developing and supporting data engineering, ETL, and database solutions.",
    summary:
      "Working hands-on across both on-premises database environments and modern cloud data architectures. Focused on constructing reliable ETL/ELT pipelines, dimensional data models, and analytical lakehouses.",
    achievements: [
      "Designed and maintained automated ETL/ELT pipelines moving operational data into analytical stores.",
      "Authored complex SQL queries, window functions, CTEs, and stored procedures for data transformation and quality validation.",
      "Engineered Kimball Star Schema models with clear Fact and Dimension table boundaries and surrogate key mappings.",
      "Developed big data transformations using Apache Spark and PySpark in Databricks environments.",
      "Constructed Medallion lakehouse pipelines (Bronze, Silver, Gold) on Azure and Microsoft Fabric.",
      "Built semantic models and operational dashboards in Power BI utilizing DAX for time-intelligence calculations."
    ],
    technologies: ["SQL", "Python", "PySpark", "Azure Data Factory", "Databricks", "ADLS Gen2", "Microsoft Fabric", "Power BI", "PostgreSQL", "SQL Server"]
  }
];
