/**
 * data.js — Single source of truth for all portfolio content.
 * Edit this file to update any section of the portfolio.
 */

const PORTFOLIO_DATA = {

  // =============================================
  // HERO TYPED STRINGS
  // =============================================
  typedStrings: [
    'Embedded Software Engineer',
    'Firmware Developer',
    'Clean Code Advocate',
  ],

  // =============================================
  // TICKER ITEMS (moving horizontal bar)
  // =============================================
  tickerItems: [
    'Embedded C',
    'ARM Cortex-M',
    'CAN / CAN-FD',
    'FreeRTOS',
    'SPI / I2C / UART',
    'STM32 / ESP32',
    'SOLID Principles',
    'HAL Abstraction',
    'OTA Bootloaders',
    'Yocto BSP',
    'Layered Architecture',
    'ISO 26262',
  ],

  // =============================================
  // HERO CODE SNIPPET (displayed in code window)
  // =============================================
  heroCode: `<span style="color:#63e8db">/* Hardware-agnostic SPI driver */</span>
<span style="color:#a78bfa">typedef struct</span> {
    <span style="color:#63e8db">SPI_Status_t</span> (*<span style="color:#e2e8f0">init</span>)(<span style="color:#a78bfa">void</span>);
    <span style="color:#63e8db">SPI_Status_t</span> (*<span style="color:#e2e8f0">transfer</span>)(
        <span style="color:#a78bfa">uint8_t</span> *tx, <span style="color:#a78bfa">uint8_t</span> *rx, <span style="color:#a78bfa">size_t</span> len
    );
} <span style="color:#63e8db">SPI_Driver_t</span>;

<span style="color:#8899aa">/* Swap hardware — zero app changes */</span>
<span style="color:#63e8db">SPI_Driver_t</span> driver = {
    .init     = <span style="color:#f0b429">STM32_SPI_Init</span>,
    .transfer = <span style="color:#f0b429">STM32_SPI_Transfer</span>,
};`,

  // =============================================
  // SKILLS  — add / remove / reorder freely
  // =============================================
  skills: [
    {
      category: 'Firmware Development',
      subtitle: 'Core embedded programming capabilities',
      color: 'primary',
      items: [
        'C / Embedded C (Primary)', 'Modern C++', 'SOLID Principles',
        'Clean Layered Architecture', 'Hardware-Agnostic Design',
        'FreeRTOS', 'Bare-Metal Embedded',
      ],
    },
    {
      category: 'Communication Protocols',
      subtitle: 'Hardware interfaces and bus protocols',
      color: 'violet',
      items: [
        'CAN / CAN-FD', 'SPI', 'I2C', 'UART',
        'USB', 'TCP/IP', 'ISO 8583',
      ],
    },
    {
      category: 'MCU & Platforms',
      subtitle: 'Microcontroller families and SoCs',
      color: 'amber',
      items: [
        'ARM Cortex-M (STM32)', 'ESP32', 'AVR',
        'BeagleBone Blue', 'Embedded Linux',
        'Yocto Project (BSP)',
      ],
    },
    {
      category: 'Architecture & Design',
      subtitle: 'Structural patterns for scalable firmware',
      color: 'primary',
      items: [
        'HAL Abstraction Layer', 'Driver Layer Isolation',
        'SOLID Principles', 'Dependency Inversion',
        'IPC Frameworks', 'Modular Driver Design',
      ],
    },
    {
      category: 'Security & Reliability',
      subtitle: 'Safe, production-grade firmware',
      color: 'rose',
      items: [
        'OTA Bootloaders (Dual-Bank)', 'TLS / SSL',
        'Secure Boot', 'Key Management',
        'Checksum Verification', 'AUTOSAR',
        'ISO 26262 Functional Safety',
      ],
    },
    {
      category: 'Tools & Debugging',
      subtitle: 'Development and diagnostics toolchain',
      color: 'violet',
      items: [
        'GDB', 'Logic Analyzers', 'Oscilloscopes',
        'MobaXterm / Serial Terminals', 'Git / GitHub',
        'Valgrind', 'Python', 'Bash',
      ],
    },
  ],

  // =============================================
  // EXPERIENCE — ordered newest first
  // =============================================
  experience: [
    {
      title: 'Embedded Software Engineer',
      company: 'Coretech Innovations',
      date: 'Jun 2025 — Present',
      location: 'Cairo, Egypt',
      focus: 'Firmware',
      focusLabel: '',
      bullets: [
        'Developed and maintained embedded firmware in C / Embedded C for secure payment terminals using ARM Cortex-M microcontrollers and FreeRTOS, following clean layered architecture and SOLID design principles.',
        'Designed hardware-agnostic driver abstractions for UART, SPI, and I2C peripherals, enabling seamless porting across hardware revisions without application-layer changes.',
        'Collaborated with backend, Android, and hardware teams to integrate secure communication stacks (TLS/SSL) and transaction protocols (ISO 8583) across system boundaries.',
        'Diagnosed and resolved production issues via deep log analysis, hex dump inspection, and serial terminal debugging (MobaXterm/GDB), achieving and maintaining 99.9% system uptime.',
        'Implemented robust IPC frameworks for real-time data synchronization between secure payment subsystems and application layers.',
      ],
    },
    {
      title: 'Reserved Officer — Technical Leadership & Coordination',
      company: 'Egyptian Armed Forces',
      date: 'May 2023 — May 2025',
      location: 'Egypt',
      focus: 'Leadership',
      focusLabel: '',
      bullets: [
        'Led cross-functional teams under high-pressure, mission-critical conditions, demonstrating reliability, ownership, and disciplined follow-through.',
        'Developed strong coordination and root cause analysis skills in complex operational environments.',
      ],
    },
    {
      title: 'Embedded Software Engineer',
      company: 'HNE Futures',
      date: 'Aug 2022 — May 2023',
      location: 'Egypt',
      focus: 'EVSE / ESS',
      focusLabel: '',
      bullets: [
        'Developed embedded firmware for payment-integrated EVSE (Electric Vehicle Supply Equipment) systems, closely related to Energy Storage System (ESS) architectures, targeting STM32-based platforms with real-time load management.',
        'Implemented CAN-based communication between EVSE controller and energy management subsystems, enabling reliable real-time data exchange across distributed hardware nodes.',
        'Engineered dual-bank OTA bootloader with checksum verification for secure, field-safe firmware updates on deployed charging infrastructure.',
        'Integrated TLS/SSL secure communication layers between embedded hardware and cloud backends, managing certificate provisioning and secure key storage.',
        'Applied abstraction layers and modular driver design to isolate hardware-specific logic, reducing coupling and simplifying future hardware migrations.',
      ],
    },
  ],

  // =============================================
  // PROJECTS — add new projects here
  // =============================================
  projects: [
    {
      id: 'bbblue-bsp',
      title: 'BeagleBone Blue Custom BSP & Sensor Drivers',
      description:
        'Custom Yocto BSP layer for BeagleBone Blue with hardware-agnostic machine definitions and kernel-level sensor drivers, applying clean separation between driver and application layers.',
      highlights: [
        'Developed custom Yocto BSP layer with automated firmware injection for WL1835MOD wireless modules',
        'Engineered device drivers for AK8963 magnetometer and BMP280 barometer with kernel-level stability routines',
        'Applied clean separation between driver and application layers (HAL pattern)',
        'Defined hardware-agnostic machine configurations for headless robotics targets',
      ],
      tags: ['Yocto', 'Linux Kernel', 'C', 'I2C/SPI', 'BSP'],
      tagColor: 'primary',
      category: 'drivers',
      featured: true,
      github: 'https://github.com/Mostafa-elfallal/BBBlue-BSP',
      date: '2026',
    },
    {
      id: 'scara-robot',
      title: 'Custom SCARA Robot — ESP32 + CAN Motion Control',
      description:
        'Designing and building a multi-axis SCARA robot using ESP32-based control with CAN bus for real-time communication between the motion controller and Leadshine motor drivers.',
      highlights: [
        'ESP32-based multi-axis motion controller with CAN bus inter-node communication',
        'Integrated NEMA 34 closed-loop steppers and Leadshine drivers for high-torque precision axis control',
        'Designed real-time motion state machine with clean hardware-agnostic abstraction layers',
        'Applied SOLID principles to decouple motion planner from hardware driver layer',
      ],
      tags: ['ESP32', 'C++', 'CAN', 'Motion Control', 'RTOS'],
      tagColor: 'violet',
      category: 'firmware',
      featured: true,
      github: '',
      date: 'Current',
    },
    {
      id: 'audio-player',
      title: 'STM32 Audio Player (LVGL)',
      description:
        'Modular audio player on STM32 with LVGL UI, integrating low-level SPI/I2S audio drivers and USB MSC/FatFs for media management using a layered, hardware-decoupled architecture.',
      highlights: [
        'Developed modular audio player with LVGL UI on STM32',
        'Integrated low-level SPI/I2S audio drivers with DMA transfers',
        'Implemented USB MSC + FatFs for media management',
        'Layered, hardware-decoupled architecture — driver → HAL → app',
      ],
      tags: ['C', 'STM32', 'LVGL', 'SPI', 'I2S', 'DMA'],
      tagColor: 'amber',
      category: 'firmware',
      featured: false,
      github: 'https://github.com/Mostafa-elfallal/AudioDev',
      date: '2025',
    },
    {
      id: 'embedded-linux',
      title: 'Embedded Linux System Development',
      description:
        'Custom Linux kernel modules and system services with focus on cross-compilation, IPC mechanisms, and automated kernel-level interface validation.',
      highlights: [
        'Developed custom Linux kernel modules and system services',
        'Focused on cross-compilation and IPC mechanisms',
        'Automated validation of kernel-level interfaces',
      ],
      tags: ['Linux', 'Kernel Modules', 'C', 'Bash', 'IPC'],
      tagColor: 'rose',
      category: 'drivers',
      featured: false,
      github: 'https://github.com/Mostafa-elfallal/aesdAssignments',
      date: '2025',
    },
    {
      id: 'adcs-satellite',
      title: 'ADCS Satellite System — Graduation Project',
      description:
        'STM32F4-based control software for satellite orientation in collaboration with the Egyptian Space Agency, implementing high-precision sensor fusion and three-axis stabilization.',
      highlights: [
        'STM32F4-based control software for satellite orientation (Egyptian Space Agency)',
        'Implemented high-precision sensor fusion algorithms for three-axis stabilization',
        'Demonstrated real hardware integration at system scale',
        'Applied structured design patterns for flight-critical embedded software',
      ],
      tags: ['STM32', 'C', 'Sensor Fusion', 'Control Systems', 'Embedded'],
      tagColor: 'violet',
      category: 'firmware',
      featured: false,
      github: 'https://github.com/Mostafa-elfallal/Graduation',
      date: '2022',
    },
    {
      id: 'squad-x',
      title: 'Co-Founder — Squad X Robotics Team',
      description:
        'Led embedded C++ development for autonomous underwater robots (MATE ROV Competition), integrating sensor fusion, motor control, and real-time state machines.',
      highlights: [
        'Led embedded C++ development for autonomous underwater vehicles (MATE ROV Competition)',
        'Integrated sensor fusion, motor control, and real-time state machines',
        'Mentored junior members on embedded design, sensor integration, and clean code practices',
      ],
      tags: ['C++', 'Robotics', 'Sensor Fusion', 'State Machines', 'Leadership'],
      tagColor: 'primary',
      category: 'other',
      featured: false,
      github: '',
      date: '2020–2022',
    },
  ],

  // Project filter categories
  projectCategories: [
    { id: 'all', label: 'All Projects' },
    { id: 'firmware', label: 'Firmware' },
    { id: 'drivers', label: 'Drivers & BSP' },
    { id: 'other', label: 'Other' },
  ],

  // =============================================
  // CERTIFICATIONS & COURSES
  // =============================================
  certifications: [
    {
      title: 'Automotive Software Engineering',
      org: 'Professional Certification',
      date: '2024',
      status: 'completed',
      description:
        'AUTOSAR architecture, ASPICE process improvement, and ISO 26262 Functional Safety — directly applicable to automotive and heavy-vehicle embedded domains.',
    },
    {
      title: 'Advanced Embedded Linux Development Specialization',
      org: 'Coursera / UC Boulder',
      date: '2024',
      status: 'completed',
      description:
        'Yocto build systems, device driver development, BSP integration, and kernel module programming for production embedded Linux targets.',
    },
    {
      title: 'Embedded Systems Diploma',
      org: 'Learn-In-Depth',
      date: '2022',
      status: 'completed',
      description:
        'Embedded C, ARM Cortex-M architecture, memory-mapped I/O, peripheral driver design, and real-time system fundamentals.',
    },
    {
      title: 'Digital Egypt Pioneers Initiative (DEPI) — Software Testing Track',
      org: 'MCIT Egypt',
      date: 'Jun – Dec 2025',
      status: 'completed',
      description:
        'Manual/automated testing, API validation, and quality assurance practices — strengthens systematic verification mindset applicable to embedded validation.',
    },
    {
      title: 'ISTQB Certified Tester Foundation Level (CTFL)',
      org: 'ISTQB',
      date: 'In Progress',
      status: 'in-progress',
      description:
        'Standardized testing processes, defect management, and structured test design techniques.',
    },
  ],
};


