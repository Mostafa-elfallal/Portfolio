/**
 * data.js — Single source of truth for all portfolio content.
 * Edit this file to update any section of the portfolio.
 */

const PORTFOLIO_DATA = {

  // =============================================
  // HERO TYPED STRINGS
  // =============================================
  typedStrings: [
    'Embedded Automation Test Engineer',
    'Python Automation Specialist',
    'Framework Builder',
  ],

  // =============================================
  // TICKER ITEMS (moving horizontal bar)
  // =============================================
  tickerItems: [
    'Python (Pytest)',
    'CAPL Scripts',
    'CANoe / CANalyzer',
    'HIL / SIL Testing',
    'Yocto Project',
    'Device Drivers',
    'OTA Bootloaders',
    'OCPP 2.0.1',
    'ISTQB CTFL',
    'Root Cause Analysis',
    'CANFD / SPI / I2C',
    'BeagleBone Blue',
  ],

  // =============================================
  // HERO CODE SNIPPET (displayed in code window)
  // =============================================
  heroCode: `<span style="color:#63e8db">@pytest.mark.hardware</span>
<span style="color:#a78bfa">def</span> <span style="color:#e2e8f0">test_sensor_integrity</span>():
    <span style="color:#8899aa"># Initialize I2C driver for BMP280</span>
    driver = <span style="color:#63e8db">DeviceDriver</span>(<span style="color:#f0b429">"/dev/i2c-1"</span>)
    
    <span style="color:#a78bfa">assert</span> driver.initialize() <span style="color:#a78bfa">is</span> <span style="color:#f0b429">True</span>
    <span style="color:#a78bfa">assert</span> driver.get_id() == <span style="color:#f0b429">0x58</span>
    
    <span style="color:#8899aa"># Validate real-time telemetry</span>
    temp = driver.read_temp()
    <span style="color:#a78bfa">assert</span> <span style="color:#f0b429">20.0</span> <= temp <= <span style="color:#f0b429">35.0</span>
    
    <span style="color:#8899aa"># Log results to test report</span>
    <span style="color:#63e8db">Logger</span>.info(<span style="color:#f0b429">f"Sensor Check Passed: {temp}C"</span>)
}`,

  // =============================================
  // SKILLS  — add / remove / reorder freely
  // =============================================
  skills: [
    {
      category: 'Test Automation',
      subtitle: 'Frameworks & tools for automated testing',
      color: 'primary',
      items: [
        'Python (Pytest)', 'CAPL Scripts (CANoe)', 'Automated Log Analysis',
        'Hardware-in-the-Loop (HIL)', 'Software-in-the-Loop (SIL)',
        'Page Object Model (POM)', 'Jenkins Pipelines',
      ],
    },
    {
      category: 'Embedded & Protocols',
      subtitle: 'Hardware interfaces and communication',
      color: 'violet',
      items: [
        'CAN / CANFD', 'I2C / SPI / UART', 'OCPP (1.6 / 2.0.1)',
        'OTA Bootloaders', 'BeagleBone Blue', 'STM32',
        'Yocto Project (BSP)',
      ],
    },
    {
      category: 'Programming Languages',
      subtitle: 'Languages used in test development',
      color: 'primary',
      items: [
        'Python (Primary)', 'CAPL', 'C / C++', 'Bash', 'Assembly (basics)',
      ],
    },
    {
      category: 'Testing Concepts',
      subtitle: 'Theoretical and applied QA knowledge',
      color: 'amber',
      items: [
        'ISTQB CTFL Fundamentals', 'Test Case Design',
        'Equivalence Partitioning', 'Boundary Value Analysis',
        'Defect Lifecycle Management', 'V-Model SDLC',
        'HIL/SIL/MIL Testing', 'Root Cause Analysis',
      ],
    },
    {
      category: 'Tools & Build Systems',
      subtitle: 'Development and validation tools',
      color: 'violet',
      items: [
        'Git / GitHub', 'Linux (Ubuntu/Debian)', 'CANoe / CANalyzer',
        'Postman', 'Makefile / CMake', 'VS Code', 'Jira',
      ],
    },
    {
      category: 'Additional Skills',
      subtitle: 'Cross-domain competencies',
      color: 'rose',
      items: [
        'SQL (basic queries)', 'UML', 'Agile / Scrum',
        'Technical Documentation', 'System Integration',
      ],
    },
  ],

  // =============================================
  // EXPERIENCE — ordered newest first
  // =============================================
  experience: [
    {
      title: 'Software Engineer',
      company: 'Coretech Innovations',
      date: 'Jun 2025 — Present',
      location: 'Egypt',
      focus: 'Embedded QA',
      focusLabel: '',
      bullets: [
        'Developed and optimized core application logic for a production-grade AC EV charger system, ensuring high reliability and efficient resource management.',
        'Implemented and integrated the OCPP (1.6 and 2.0.1) protocol stack, handling complex state machines and secure backend communication.',
        'Scripted automated log-analysis tools in Python to parse system event traces, reducing mean-time-to-triage by over 40%.',
        'Designed firmware for IoT prototypes, focusing on robust sensor data acquisition and low-level communication via I2C, SPI, and UART.',
        'Contributed to hardware-software integration layers, resolving critical synchronization issues and optimizing peripheral driver performance.',
      ],
    },
    {
      title: 'Reserve Officer',
      company: 'Egyptian Armed Forces',
      date: 'May 2023 — May 2025',
      location: 'Egypt',
      focus: 'Leadership',
      focusLabel: '',
      bullets: [
        'Completed mandatory military service, demonstrating leadership, discipline, and effective team coordination under pressure.',
      ],
    },
    {
      title: 'Embedded Software Engineer',
      company: 'HNE Futures',
      date: 'Aug 2022 — May 2023',
      location: 'Egypt',
      focus: 'Embedded',
      focusLabel: '',
      bullets: [
        'Validated an OTA bootloader update mechanism end-to-end, designing negative test cases for corrupted payloads and rollback recovery.',
        'Achieved zero field incidents post-release through rigorous functional verification of firmware update processes.',
      ],
    },
  ],

  // =============================================
  // PROJECTS — add new projects here
  // =============================================
  projects: [
    {
      id: 'bbblue-bsp',
      title: 'BeagleBone Blue Custom BSP & Drivers',
      description:
        'Developed a custom Yocto BSP layer and kernel drivers for BeagleBone Blue, including automated verification routines for driver stability.',
      highlights: [
        'Optimized Yocto machine definitions for headless robotics targets',
        'Engineered device drivers for AK8963 (Mag) and BMP280 (Temp/Press)',
        'Developed automated verification routines to validate kernel-level stability',
        'Implemented firmware auto-injection for WL1835MOD modules',
      ],
      tags: ['Yocto', 'Linux Kernel', 'C', 'Python', 'I2C/SPI'],
      tagColor: 'primary',
      category: 'embedded-qa',
      featured: true,
      github: 'https://github.com/Mostafa-elfallal/BBBlue-BSP',
      date: '2026',
    },
    {
      id: 'testblaze',
      title: 'TestBlaze: Automated Testing Framework',
      description:
        'Modular automation framework implementing Page Object Model (POM) and Fluent Interface patterns for end-to-end validation.',
      highlights: [
        'Selenium + Python integration for scalable UI automation',
        'Authored extensive QA documentation (SRS, Manual Test Cases, Bug Reports)',
        'Implemented parallel test execution for optimized CI/CD cycles',
        'Ensured full requirement traceability and structured defect management',
      ],
      tags: ['Python', 'Selenium', 'Pytest', 'POM', 'QA Documentation'],
      tagColor: 'primary',
      category: 'automation',
      featured: true,
      github: 'https://github.com/SpaceTestTeam/TestBlaze-Automated-UI-Testing-for-Demoblaze',
      date: '2025',
    },
    {
      id: 'audio-player',
      title: 'STM32 Audio Player (LVGL)',
      description:
        'Feature-rich audio player using STM32 and LVGL, integrating low-level audio drivers and automated UI verification.',
      highlights: [
        'Developed feature-rich UI with LVGL library',
        'Integrated low-level audio drivers (I2S/DMA)',
        'Implemented automated UI responsiveness verification',
      ],
      tags: ['C', 'STM32', 'LVGL', 'Embedded'],
      tagColor: 'amber',
      category: 'embedded-qa',
      featured: false,
      github: 'https://github.com/Mostafa-elfallal/AudioDev',
      date: '2025',
    },
    {
      id: 'embedded-linux',
      title: 'Embedded Linux System Development',
      description:
        'Custom Linux kernel modules and system services focusing on cross-compilation and IPC mechanisms.',
      highlights: [
        'Developed custom Linux kernel modules and system services',
        'Focused on cross-compilation and IPC mechanisms',
        'Automated validation of kernel-level interfaces',
      ],
      tags: ['Linux', 'Kernel', 'C', 'Bash'],
      tagColor: 'rose',
      category: 'embedded-qa',
      featured: false,
      github: 'https://github.com/Mostafa-elfallal/aesdAssignments',
      date: '2025',
    },
    {
      id: 'adcs-validation',
      title: 'ADCS Satellite System (Graduation)',
      description:
        'Functional verification and sensor-fusion algorithm validation for a satellite control system in collaboration with the Egyptian Space Agency.',
      highlights: [
        'Responsible for functional verification using MATLAB and LabVIEW',
        'Developed and validated control algorithms for three-axis stabilization',
        'Applied systematic test-driven verification for flight-critical software',
      ],
      tags: ['MATLAB', 'LabVIEW', 'Control Systems', 'Validation'],
      tagColor: 'violet',
      category: 'embedded-qa',
      featured: false,
      github: 'https://github.com/Mostafa-elfallal/Graduation',
      date: '2022',
    },
    {
      id: 'squad-x',
      title: 'Squad X Robotics Team',
      description:
        'Co-founded and led a robotics team for MATE ROV Competition, applying structured test plans for autonomous underwater vehicles.',
      highlights: [
        'Coordinated end-to-end testing and system validation',
        'Applied structured test plans under real competition constraints',
        'Mentored team on debugging and sensor validation',
      ],
      tags: ['Robotics', 'Leadership', 'Validation', 'C++'],
      tagColor: 'primary',
      category: 'other',
      featured: false,
      github: '',
      date: '2020–2022',
    },
    {
      id: 'ecpc',
      title: 'ECPC Programming Contest Participant',
      description:
        'Strengthened analytical thinking and logical problem decomposition under high-pressure competitive environments.',
      highlights: [
        'Participated twice in the Egyptian Collegiate Programming Contest',
        'Directly applicable to root-cause defect analysis and logic verification',
        'Collaborated in high-pressure team-based problem solving',
      ],
      tags: ['Problem Solving', 'Algorithms', 'Competitive Programming'],
      tagColor: 'violet',
      category: 'other',
      featured: false,
      github: '',
      date: '2020, 2021',
    },
  ],

  // Project filter categories
  projectCategories: [
    { id: 'all', label: 'All Projects' },
    { id: 'automation', label: 'Test Automation' },
    { id: 'embedded-qa', label: 'Embedded QA' },
    { id: 'other', label: 'Other' },
  ],

  // =============================================
  // CERTIFICATIONS & COURSES
  // =============================================
  certifications: [
    {
      title: 'Digital Egypt Pioneers Initiative (DEPI) — Software Testing Track',
      org: 'MCIT Egypt',
      date: 'Jun – Dec 2025',
      status: 'completed',
      description:
        'Comprehensive program covering manual testing, automated testing methodologies, API validation, and ISTQB-aligned test design.',
    },
    {
      title: 'ISTQB Certified Tester Foundation Level (CTFL)',
      org: 'ISTQB',
      date: 'In Progress',
      status: 'in-progress',
      description:
        'Actively preparing for certification in standardized testing processes and defect management.',
    },
    {
      title: 'Advanced Embedded Linux Development Specialization',
      org: 'Coursera / UC Boulder',
      date: '2024',
      status: 'completed',
      description:
        'Strengthened systems-level understanding directly applicable to firmware and BSP integration testing.',
    },
    {
      title: 'Embedded Systems Diploma',
      org: 'Learn-In-Depth',
      date: '2022',
      status: 'completed',
      description:
        'Low-level systems knowledge supporting deep comprehension of embedded targets and peripheral validation.',
    },
  ],
};


