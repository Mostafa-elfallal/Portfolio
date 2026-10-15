/**
 * data.js — Single source of truth for all portfolio content.
 * Edit this file to update any section of the portfolio.
 */

const PORTFOLIO_DATA = {

  // =============================================
  // HERO TYPED STRINGS
  // =============================================
  typedStrings: [
    'Yocto BSPs',
    'Linux kernel drivers',
    'Embedded C/C++',
  ],

  // =============================================
  // TICKER ITEMS (moving horizontal bar)
  // =============================================
  tickerItems: [
    'Yocto',
    'Linux Kernel',
    'Device Tree',
    'U-Boot',
    'Buildroot',
    'C / C++',
    'CAN / CAN-FD',
    'I2C / SPI / UART',
    'FreeRTOS',
    'ARM Cortex-A / Cortex-M',
    'CMake',
    'Docker',
  ],

  // =============================================
  // HERO CODE SNIPPET (displayed in code window)
  // Excerpt from blue_bmp280.c in BBBlue-BSP
  // =============================================
  heroCode: `<span style="color:#8899aa">/* blue_bmp280.c (BBBlue-BSP) */</span>
<span style="color:#a78bfa">static const struct</span> <span style="color:#63e8db">of_device_id</span> blue_bmp280_of_match[] = {
    { .compatible = <span style="color:#f0b429">"blue,bmp280"</span> },
    { }
};
<span style="color:#e2e8f0">MODULE_DEVICE_TABLE</span>(of, blue_bmp280_of_match);

<span style="color:#a78bfa">static struct</span> <span style="color:#63e8db">i2c_driver</span> blue_bmp280_driver = {
    .driver = {
        .name           = DRIVER_NAME,
        .of_match_table = blue_bmp280_of_match,
    },
    .probe    = <span style="color:#f0b429">blue_bmp280_probe</span>,
    .remove   = <span style="color:#f0b429">blue_bmp280_remove</span>,
    .id_table = blue_bmp280_id,
};`,

  // =============================================
  // SKILLS  — add / remove / reorder freely
  // =============================================
  skills: [
    {
      category: 'Embedded Linux',
      subtitle: 'Build systems, boot and board support',
      color: 'primary',
      items: [
        'Yocto (layers, recipes, bbappends)', 'Machine configuration',
        'Kernel config fragments', 'Buildroot', 'U-Boot / extlinux',
        'Device Tree', 'QEMU',
      ],
    },
    {
      category: 'Linux Kernel & User Space',
      subtitle: 'Drivers and system programming',
      color: 'violet',
      items: [
        'Out-of-tree kernel modules', 'Character / misc devices',
        'IIO subsystem', 'I2C client drivers', 'ioctl',
        'POSIX threads', 'Sockets & IPC', 'D-Bus', 'Daemons',
      ],
    },
    {
      category: 'Languages & Build',
      subtitle: 'Languages and toolchains',
      color: 'amber',
      items: [
        'C', 'C++ (14/17)', 'Python', 'Bash',
        'CMake', 'GNU Make', 'GCC cross-toolchains', 'Docker',
      ],
    },
    {
      category: 'Firmware & Hardware',
      subtitle: 'MCUs, peripherals and interfaces',
      color: 'primary',
      items: [
        'ARM Cortex-A8 (TI AM335x)', 'TI AM2432 (Cortex-R5F, Cortex-M4F)', 'ARM Cortex-M (STM32, NXP)', 'ESP32', 'AVR',
        'FreeRTOS', 'Board bring-up', 'CAN / CAN-FD', 'SPI / I2C / UART',
        'Ethernet / TCP/IP', 'WebSockets', 'TLS', 'OCPP',
      ],
    },
    {
      category: 'Safety & Reliability',
      subtitle: 'Fault handling and safe updates',
      color: 'rose',
      items: [
        'Watchdog supervision', 'CRC integrity checks', 'Fault handling & safe states',
        'Dual-bank OTA with rollback', 'MISRA C',
        'AUTOSAR / ISO 26262 / ASPICE (training)',
      ],
    },
    {
      category: 'Debug & Test',
      subtitle: 'Lab and software tools',
      color: 'violet',
      items: [
        'GDB', 'JTAG / SWD', 'dmesg / strace', 'Valgrind',
        'GoogleTest', 'GoogleMock', 'Cppcheck', 'Jenkins', 'GitHub Actions CI', 'Git',
        'Oscilloscope', 'Logic analyzer',
      ],
    },
  ],

  // =============================================
  // EXPERIENCE — ordered newest first
  // =============================================
  experience: [
    {
      title: 'Embedded Software Engineer',
      company: 'Swift-Act',
      date: 'Apr 2026 — Present',
      location: 'Cairo, Egypt',
      bullets: [
        'Develop C firmware for a safety-critical product on the TI AM2432 (Arm Cortex-R5F and Cortex-M4F) running FreeRTOS: task split and priorities, queues and timing checks on the critical paths.',
        'Write parts of the communication protocol handling in C++ alongside the C firmware.',
        'Brought up new boards with the hardware team (clocks, startup code, first drivers) from schematics, datasheets and the TRM.',
        'Write and maintain CAN, SPI, I2C, UART, ADC, timer and DMA drivers behind a hardware abstraction layer.',
        'Implement safety mechanisms: watchdog supervision, CRC checks on flash and configuration data, fault logging, a degraded mode and a defined safe state.',
        'Write MISRA C code checked with Cppcheck, built with CMake and Docker in a GitHub Actions CI pipeline; debug integration issues with scope, logic analyzer and JTAG/SWD + GDB.',
      ],
    },
    {
      title: 'Embedded Software Engineer',
      company: 'Coretech Innovations',
      date: 'Jun 2025 — Apr 2026',
      location: 'Cairo, Egypt',
      bullets: [
        'Developed the application software for an AC EV charger running Yocto-based Embedded Linux, in C++: the charging-session state machine and the interface to the charger\'s control board.',
        'Split the system into multi-threaded Linux processes connected over POSIX IPC (sockets, message queues, shared memory) and D-Bus.',
        'Implemented the OCPP 1.6J / 2.0.1 client to the central management system (JSON over WebSockets), covering message handling, state transitions and reconnection.',
        'Tested SPI, I2C, UART and Ethernet links on the target, and debugged driver-level issues with dmesg, strace and GDB.',
        'Wrote GoogleTest/GoogleMock unit tests run in Jenkins CI, with CMake and Docker builds, plus Python log-analysis scripts that helped find protocol-handling bugs faster.',
      ],
    },
    {
      title: 'Embedded Engineer (EV Chargers)',
      company: 'HNE Futures',
      date: 'Aug 2022 — May 2023',
      location: 'Egypt',
      bullets: [
        'Wrote firmware for AC/DC EV charger controllers, including CAN messaging between the main controller and the other nodes in the charger.',
        'Wrote multi-threaded C++ on Linux for the charger\'s connection to the cloud backend, including TLS (certificates, handshakes and reconnection).',
        'Built a dual-bank OTA bootloader: image written to the inactive bank, CRC-verified before switching, with rollback if it fails to start.',
        'Troubleshot controller boards and inverters down to component level with an oscilloscope and multimeter.',
      ],
    },
  ],

  // =============================================
  // PROJECTS — add new projects here
  // =============================================
  projects: [
    {
      id: 'bbblue-bsp',
      title: 'BeagleBone Blue Yocto BSP & Sensor Drivers',
      description:
        'A Yocto BSP layer (meta-blue-bsp) for the TI AM335x-based BeagleBone Blue, with a customised kernel, custom device tree, U-Boot extlinux boot and out-of-tree I2C sensor drivers.',
      highlights: [
        'Machine definition on top of Poky, meta-arm and meta-ti, with trimmed machine features, WL1835 Wi-Fi/Bluetooth firmware and a flashable WIC image',
        'linux-ti-staging bbappend that pulls in the BeagleBoard device-tree tree, builds a custom board DTB and sets the extlinux kernel arguments',
        'Fixed a silent hang after "Starting kernel...": UART0 could not register because the 8250 driver had only 5 port slots; solved with a kernel config fragment and earlycon',
        'Kernel drivers for the MPU9250, AK8963 and BMP280, exposed through IIO and a misc character device with ioctls, autoloaded at boot',
      ],
      tags: ['Yocto', 'Linux Kernel', 'Device Tree', 'U-Boot', 'C'],
      tagColor: 'primary',
      category: 'linux',
      featured: true,
      github: 'https://github.com/Mostafa-elfallal/BBBlue-BSP',
      date: '2026',
    },
    {
      id: 'embedded-linux',
      title: 'Advanced Embedded Linux Development Projects',
      description:
        'Assignments from the University of Colorado Boulder specialization, building a Linux system from a bare kernel up to Buildroot and Yocto images running on QEMU.',
      highlights: [
        'Cross-compiled an ARM64 kernel and booted it with a hand-built BusyBox root filesystem on QEMU',
        'Rebuilt the system with Buildroot (BR2_EXTERNAL package) and Yocto (custom meta-aesd layer and image)',
        'Character device driver backed by a circular buffer, with locking, llseek and a custom ioctl',
        'Multithreaded TCP socket server daemon in C, Valgrind-clean, tested automatically in GitHub Actions',
      ],
      tags: ['Buildroot', 'Yocto', 'QEMU', 'Kernel Modules', 'C'],
      tagColor: 'rose',
      category: 'linux',
      featured: true,
      github: 'https://github.com/Mostafa-elfallal/aesdAssignments',
      date: '2025 – 2026',
    },
    {
      id: 'scara-robot',
      title: 'SCARA Robot Arm',
      description:
        'A multi-axis SCARA arm with an ESP32 motion controller that talks to the motor drivers over CAN.',
      highlights: [
        'ESP32 motion controller with CAN communication to the axis drivers',
        'NEMA 34 closed-loop steppers with Leadshine drivers',
      ],
      tags: ['ESP32', 'C++', 'CAN', 'Motion Control'],
      tagColor: 'violet',
      category: 'firmware',
      featured: false,
      github: '',
      date: 'Ongoing',
    },
    {
      id: 'audio-player',
      title: 'STM32 Audio Player',
      description:
        'An STM32F4 audio player with an LVGL user interface, a VS1053 codec over SPI and USB mass storage for media.',
      highlights: [
        'VS1053 codec driven over SPI',
        'USB MSC + FatFs for reading media files',
        'Code split into driver, UI and playback layers',
      ],
      tags: ['C', 'STM32', 'LVGL', 'SPI', 'FatFs'],
      tagColor: 'amber',
      category: 'firmware',
      featured: false,
      github: 'https://github.com/Mostafa-elfallal/AudioDev',
      date: '2025',
    },
    {
      id: 'adcs-satellite',
      title: 'Satellite ADCS (Graduation Project)',
      description:
        'Attitude determination and control software for a satellite on STM32F4, developed with the Egyptian Space Agency.',
      highlights: [
        'Sensor fusion and three-axis attitude control on STM32F4',
        'Algorithms simulated in MATLAB and LabVIEW before running on hardware',
      ],
      tags: ['STM32', 'C', 'Sensor Fusion', 'Control'],
      tagColor: 'violet',
      category: 'firmware',
      featured: false,
      github: 'https://github.com/Mostafa-elfallal/Graduation',
      date: '2022',
    },
    {
      id: 'squad-x',
      title: 'Squad X Robotics (Co-founder, Software Lead)',
      description:
        'C++ control software and sensor handling for an underwater ROV entered in the MATE ROV Competition.',
      highlights: [
        'Control software and sensor handling in C++',
        'Taught robotics basics to new team members',
      ],
      tags: ['C++', 'Robotics', 'ROV'],
      tagColor: 'primary',
      category: 'other',
      featured: false,
      github: '',
      date: '2020 – 2022',
    },
  ],

  // Project filter categories
  projectCategories: [
    { id: 'all', label: 'All Projects' },
    { id: 'linux', label: 'Embedded Linux' },
    { id: 'firmware', label: 'Firmware' },
    { id: 'other', label: 'Other' },
  ],

  // =============================================
  // CERTIFICATIONS & COURSES
  // =============================================
  certifications: [
    {
      title: 'Advanced Embedded Linux Development Specialization',
      org: 'Coursera / University of Colorado Boulder',
      date: '2025 – 2026',
      status: 'completed',
      description:
        'Linux System Programming & Buildroot; Linux Kernel Programming & the Yocto Project; Embedded Systems Topics & Final Project.',
    },
    {
      title: 'Embedded Systems Diploma',
      org: 'Learn-In-Depth',
      date: '2022',
      status: 'completed',
      description:
        'Embedded C, ARM Cortex-M architecture, memory-mapped I/O and peripheral driver design.',
    },
    {
      title: 'Automotive Software',
      org: 'Self-study',
      date: '2024',
      status: 'completed',
      description:
        'AUTOSAR Classic layered architecture, ISO 26262 safety lifecycle, ASPICE and the V-model.',
    },
    {
      title: 'ISTQB Certified Tester Foundation Level (CTFL)',
      org: 'ISTQB',
      date: '',
      status: 'completed',
      description:
        'Test processes, test design techniques and defect management.',
    },
    {
      title: 'Digital Egypt Pioneers Initiative (DEPI), Software Testing Track',
      org: 'MCIT Egypt',
      date: 'Jun – Dec 2025',
      status: 'completed',
      description:
        'Manual and automated testing, API testing and quality assurance practices.',
    },
  ],
};
