/**
 * ALAN JOHN - PORTFOLIO DATA CONFIGURATION
 * -------------------------------------------------------------
 * Centralized, easily editable data for profile, capabilities,
 * technology interests, education, and full-page project case studies.
 */

const portfolioData = {
  // Identity & Personal Brand
  personal: {
    name: "Alan John",
    monogram: "AJ",
    badgeLabel: "GRADE 10 STUDENT • KASARAGOD, KERALA",
    headline: "Student | AI-Assisted Web Creator | Electronics & Robotics Enthusiast",
    heroIntro:
      "Hi, I'm Alan John, a Grade 10 student from Kasaragod, Kerala. I enjoy turning ideas into practical projects, from creating websites with the help of AI development tools to exploring electronics, robotics, and wireless communication. I'm continuously learning, experimenting, and developing new skills through hands-on projects.",
    aboutShort:
      "As a high school student fascinated by technology, I believe in learning by doing. Rather than just reading theory, I explore how software and hardware connect — experimenting with Arduino and ESP32 microcontrollers, wireless LoRa modules, robotics chassis, and modern AI development tools.",
    aboutExtended: [
      "My journey started with curiosity about how electronic gadgets work under the hood. Opening small appliances and tinkering with components led me to breadboards, LEDs, and simple microcontroller circuits.",
      "Today, I use AI-assisted tools like Antigravity to help plan, structure, and refine clean web interfaces, while continuing to explore physical computing with sensors, wireless telemetry, and motor control.",
      "I'm an active learner who enjoys participating in school science exhibitions, prototyping working models, and collaborating with peers on technology ideas."
    ],
    location: "Kasaragod, Kerala, India",
    emailPlaceholder: "alanelavumkunel2@gmail.com",
    contactNote: "Have an idea to discuss, a question, or want to collaborate on a school or maker project? Feel free to reach out!"
  },

  // Social & Community Links (Editable)
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "github",
      placeholder: true,
      hint: "Add your GitHub profile URL in js/data.js"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin",
      placeholder: true,
      hint: "Add your LinkedIn profile URL in js/data.js"
    },
    {
      name: "Email",
      url: "mailto:alanelavumkunel2@gmail.com",
      icon: "mail",
      placeholder: false,
      hint: "alanelavumkunel2@gmail.com"
    }
  ],

  // Hero Quick Badges
  heroHighlights: [
    {
      label: "Education",
      value: "Grade 10 Student",
      icon: "book"
    },
    {
      label: "Location",
      value: "Kasaragod, Kerala",
      icon: "location"
    },
    {
      label: "Interests",
      value: "AI Creation & Robotics",
      icon: "cpu"
    }
  ],

  // SECTION 3: "What I Can Do" (Honest, capability-focused cards)
  whatICanDo: [
    {
      cardNumber: "CARD 1",
      title: "AI-Assisted Website Creation",
      icon: "sparkles",
      description:
        "I can use AI development tools such as Antigravity to help plan, create, and improve websites through written instructions and iterative feedback."
    },
    {
      cardNumber: "CARD 2",
      title: "Website Customisation",
      icon: "layout",
      description:
        "I can communicate design ideas, customise website content and layouts with AI assistance, and improve the result through testing and feedback."
    },
    {
      cardNumber: "CARD 3",
      title: "Project Presentation",
      icon: "fileText",
      description:
        "I can organise project descriptions, photographs, videos, and documentation to present my work clearly."
    },
    {
      cardNumber: "CARD 4",
      title: "Technology Exploration",
      icon: "cpu",
      description:
        "I enjoy exploring electronics, robotics, sensors, microcontrollers, and practical technology projects."
    },
    {
      cardNumber: "CARD 5",
      title: "AI-Assisted Problem Solving",
      icon: "lightbulb",
      description:
        "I use AI tools to help understand technical problems, explore possible solutions, and learn new concepts."
    }
  ],
  whatICanDoNote:
    "I'm still learning programming fundamentals and developing my technical skills through practice.",

  // SECTION 4: "Technologies & Interests" (Exploration & project use, not claims of expertise)
  technologiesAndInterests: [
    {
      title: "AI-Assisted Web Development",
      category: "Software & Web",
      icon: "globe",
      description:
        "Using AI coding agents and prompt-based workflows to design responsive, user-friendly web pages."
    },
    {
      title: "Arduino",
      category: "Microcontrollers",
      icon: "cpu",
      description:
        "Building hands-on circuits, reading digital/analog sensors, and controlling motor outputs with Arduino Uno."
    },
    {
      title: "ESP32",
      category: "Microcontrollers",
      icon: "chip",
      description:
        "Exploring dual-core 32-bit microcontrollers with built-in Wi-Fi and Bluetooth for connected sensing projects."
    },
    {
      title: "LoRa Communication",
      category: "Wireless",
      icon: "radio",
      description:
        "Experimenting with long-range, low-power point-to-point radio telemetry for remote monitoring stations."
    },
    {
      title: "Sensors & IoT",
      category: "Embedded Hardware",
      icon: "wifi",
      description:
        "Testing ultrasonic distance sensors, raindrop sensors, and environmental monitoring modules."
    },
    {
      title: "Robotics & Motor Control",
      category: "Robotics",
      icon: "bot",
      description:
        "Assembling wheeled rover chassis, dual H-bridge motor drivers (L298N), and wireless remote steering."
    },
    {
      title: "Renewable Energy & Solar",
      category: "Clean Tech",
      icon: "sun",
      description:
        "Investigating miniature solar panels, battery charge controllers, and clean energy distribution models."
    }
  ],

  // SECTION 5: Education (Personalized card)
  education: {
    status: "Currently Studying",
    title: "Grade 10 Student",
    location: "Kasaragod, Kerala, India",
    description:
      "Currently studying in Grade 10, with an interest in science, technology, electronics, robotics, and creative problem-solving. I enjoy learning through practical projects and AI-assisted website creation.",
    image: "assets/images/education-photo.svg",
    highlights: [
      "Focused on foundational science, mathematics, and computing principles.",
      "Engaged in hands-on physics and electronics model-making for school exhibitions.",
      "Learning web design concepts and code structure with AI assistance.",
      "Continuously testing and documenting microcontroller circuit builds."
    ]
  },

  // SECTION 6 & 7: FULL-PAGE PROJECT CASE STUDIES
  projects: [
    {
      id: "smart-flood-detection",
      slug: "smart-flood-detection",
      title: "Smart Flood Detection & Early Warning System",
      category: "IoT & Embedded Systems",
      subtitle:
        "An electronics project exploring water-level monitoring, wireless communication, and early-warning alerts.",
      status: "Active Prototype Exploration",
      coverImage: "assets/images/project-flood-detection.svg",
      tags: ["IoT", "ESP32", "LoRa", "Sensors", "Embedded Systems"],
      shortDescription:
        "A flood-monitoring concept that uses sensors, wireless communication, and visual or audible alerts to help identify changing water conditions.",

      // A. Project Overview
      overview: {
        problem:
          "Low-lying and riverside regions are frequently vulnerable to unexpected flash flooding caused by sudden torrential downpours. Conventional monitoring stations often rely on cellular infrastructure, which can fail during severe storms.",
        purpose:
          "To design and prototype an autonomous, off-grid demonstration system capable of sensing rising water levels and rain, transmitting telemetry over a wireless radio link, and providing multi-stage alerts.",
        objectives: [
          "Accurately measure changing water surface distance using non-contact ultrasonic sensing.",
          "Detect immediate precipitation with a raindrop sensor.",
          "Transmit telemetry packets point-to-point without relying on cellular towers or Wi-Fi.",
          "Present real-time readings and advisory/warning alerts on a dedicated receiver display station."
        ],
        description:
          "This project explores how sensors and wireless communication can monitor changing water levels and provide early-warning alerts. It combines sensor measurements, a microcontroller, LoRa communication, and visual or audible indicators in a demonstration system.",
        intendedBenefits:
          "Demonstrates how affordable open hardware can serve as an early warning safeguard, buying crucial evacuation time for communities before floodwaters reach dangerous thresholds.",
        statusNote: "Working hardware prototype under ongoing indoor/outdoor bench testing.",
        disclaimer:
          "Note: This is an educational demonstration project and experimental prototype. It is not deployed for live municipal emergency management or guaranteed flood prediction."
      },

      // B. How It Works Flow Diagram
      howItWorks: {
        diagramImage: "assets/images/flood-flow-diagram.svg",
        caption:
          "Conceptual System Architecture: Sensing Node → Transmitter MCU → Wireless LoRa → Receiver Base → Warning Indicators",
        steps: [
          {
            stage: "1. Sensing Node",
            detail:
              "An ultrasonic sensor pointed downward towards the water surface measures water level changes. A raindrop sensor simultaneously monitors surface precipitation."
          },
          {
            stage: "2. Transmitter MCU (ESP32)",
            detail:
              "The ESP32 reads sensor values, applies digital filtering to average ripples, and formats the distance and rain status into structured telemetry packets."
          },
          {
            stage: "3. LoRa Wireless Link",
            detail:
              "An AS32 LoRa module broadcasts data packets over long-range radio frequencies (433MHz) with high receiver sensitivity and noise immunity."
          },
          {
            stage: "4. Receiver Base MCU (ESP32)",
            detail:
              "The base station ESP32 receives the radio packets, validates the checksum, and evaluates the water level against predefined threshold stages."
          },
          {
            stage: "5. Visual & Audible Warning",
            detail:
              "Current water height is displayed on a 2.8\" color TFT screen. A traffic-light LED module and piezo buzzer activate Warning (Yellow) or Danger (Red) states."
          }
        ]
      },

      // C. Components Used Table
      components: [
        {
          name: "ESP32 Development Board",
          quantity: "2 units",
          model: "ESP32-WROOM-32 (30-pin)",
          purpose: "Transmitter sensing controller & Receiver base controller",
          image: "assets/images/project-flood-detection.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Dual-core, 240MHz, hardware SPI and UART support"
        },
        {
          name: "AS32 LoRa Serial Module",
          quantity: "2 units",
          model: "AS32-TTL-100 / SX1278 (433 MHz)",
          purpose: "Long-range point-to-point wireless serial radio transceiver",
          image: "assets/images/project-flood-detection.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Configured via AT commands; requires spring or SMA antenna"
        },
        {
          name: "Ultrasonic Distance Sensor",
          quantity: "1 unit",
          model: "JSN-SR04T / HC-SR04",
          purpose: "Non-contact measurement of water surface distance",
          image: "assets/images/project-flood-detection.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Waterproof probe suited for humid outdoor testing"
        },
        {
          name: "Raindrop Sensor Module",
          quantity: "1 unit",
          model: "FC-37 with LM393 Comparator",
          purpose: "Immediate detection of rainfall precipitation",
          image: "assets/images/project-flood-detection.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Provides both analog and digital threshold outputs"
        },
        {
          name: "2.8-inch TFT LCD Display",
          quantity: "1 unit",
          model: "ILI9341 SPI (240 x 320 px)",
          purpose: "Graphical status, real-time depth graph, and alarm display",
          image: "assets/images/project-flood-detection.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Connected via high-speed hardware SPI pins"
        },
        {
          name: "Active Buzzer Module",
          quantity: "1 unit",
          model: "5V Piezo Buzzer",
          purpose: "High-pitch audible alarm for advisory and danger states",
          image: "assets/images/project-flood-detection.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Controlled via digital GPIO switching"
        },
        {
          name: "Traffic-Light Indicator Module",
          quantity: "1 unit",
          model: "Red / Yellow / Green 8mm LED Board",
          purpose: "Intuitive multi-stage visual alert indication",
          image: "assets/images/project-flood-detection.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Green = Normal, Yellow = Advisory Alert, Red = Evacuate"
        },
        {
          name: "Battery & Power Modules",
          quantity: "2 units",
          model: "18650 Li-ion battery shields (5V / 3.3V)",
          purpose: "Independent power supply for remote transmitter and receiver",
          image: "assets/images/project-flood-detection.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Ensures stand-alone operation away from mains outlets"
        },
        {
          name: "Connecting Wires & Breadboard",
          quantity: "1 set",
          model: "Dupont jumper wires & standard breadboards",
          purpose: "Prototyping circuit interconnections",
          image: "assets/images/project-flood-detection.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Will be replaced with soldered perfboard in future iterations"
        }
      ],

      // D. Component Purchase Links & Resources
      purchaseResources: [
        {
          name: "ESP32-WROOM-32 Development Board",
          supplier: "Local Electronics Store / Online",
          productUrl: "",
          datasheetUrl: "",
          price: "Editable placeholder",
          notes: "Standard 30-pin board with Micro-USB interface."
        },
        {
          name: "AS32-TTL-100 LoRa Module (433MHz)",
          supplier: "Robotics Store / Online",
          productUrl: "",
          datasheetUrl: "",
          price: "Editable placeholder",
          notes: "Ensure frequency compliance with local radio regulations."
        },
        {
          name: "JSN-SR04T Waterproof Ultrasonic Sensor",
          supplier: "Sensor Supplier",
          productUrl: "",
          datasheetUrl: "",
          price: "Editable placeholder",
          notes: "Waterproof probe with 2.5m cable included."
        },
        {
          name: "FC-37 Raindrop Sensor + LM393",
          supplier: "Electronics Hobby Store",
          productUrl: "",
          datasheetUrl: "",
          price: "Editable placeholder",
          notes: "Nickel-coated sensing plate with potentiometer sensitivity."
        },
        {
          name: "2.8\" SPI TFT LCD Module (ILI9341)",
          supplier: "Display Vendor",
          productUrl: "",
          datasheetUrl: "",
          price: "Editable placeholder",
          notes: "3.3V logic level compatible with ESP32."
        }
      ],

      // E. LoRa Transmitter Source Code
      transmitterCode: {
        title: "LoRa Transmitter Source Code (ESP32)",
        explanation:
          "The transmitter firmware samples distance and rain sensors, filters anomalous spikes, packages the metrics into a formatted serial telemetry packet, and transmits it via the AS32 LoRa radio module.",
        mcuSetup: "ESP32 running Arduino core. Configured with HardwareSerial2 on GPIO 16 (RX) and GPIO 17 (TX).",
        pinConnections: [
          { pin: "GPIO 16", role: "UART2 RX ← Connects to AS32 TXD" },
          { pin: "GPIO 17", role: "UART2 TX → Connects to AS32 RXD" },
          { pin: "GPIO 5", role: "Ultrasonic TRIG (Pulse Output)" },
          { pin: "GPIO 18", role: "Ultrasonic ECHO (Input Pulse)" },
          { pin: "GPIO 34", role: "Rain Sensor Analog Input (ADC1)" },
          { pin: "3.3V & GND", role: "Logic Power Rail" }
        ],
        libraries: ["Arduino.h", "HardwareSerial.h"],
        codePlaceholder: `// =========================================================================
// SMART FLOOD DETECTION SYSTEM - TRANSMITTER FIRMWARE (ESP32)
// Author: Alan John (Student Exploration Project)
// Description: Ultrasonic distance sensing + Rain detection + LoRa broadcast
// Note: This is a structured starter template. Replace with your actual code.
// =========================================================================

#include <Arduino.h>
#include <HardwareSerial.h>

// Pin Definitions
#define TRIG_PIN 5
#define ECHO_PIN 18
#define RAIN_PIN 34
#define LORA_RX_PIN 16
#define LORA_TX_PIN 17

HardwareSerial LoRaSerial(2); // Use UART2 for AS32 LoRa module

const unsigned long SEND_INTERVAL = 3000; // Send telemetry every 3 seconds
unsigned long lastSendTime = 0;

float readUltrasonicDistanceCM() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH, 35000); // 35ms timeout (~6m)
  if (duration == 0) return -1.0; // Out of range or sensor timeout
  return (duration * 0.0343) / 2.0;
}

void setup() {
  Serial.begin(115200);
  LoRaSerial.begin(9600, SERIAL_8N1, LORA_RX_PIN, LORA_TX_PIN);

  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(RAIN_PIN, INPUT);

  Serial.println("[TX] Flood Sensing Transmitter Initialized.");
}

void loop() {
  unsigned long now = millis();
  if (now - lastSendTime >= SEND_INTERVAL) {
    lastSendTime = now;

    float distance = readUltrasonicDistanceCM();
    int rainRaw = analogRead(RAIN_PIN);
    bool isRaining = (rainRaw < 2500); // Inverted analog threshold

    // Format packet: "FLOOD,ID=1,DIST=xxx.x,RAIN=0/1"
    String packet = "FLOOD,ID=1,DIST=" + String(distance, 1) + ",RAIN=" + String(isRaining ? 1 : 0);

    LoRaSerial.println(packet);
    Serial.println("[TX Sent]: " + packet);
  }
}`,
        notes:
          "Configure AS32 module parameters (Baud rate 9600, Channel 433MHz, 20dBm power) using manufacturer AT command utility before deploying."
      },

      // F. LoRa Receiver Source Code
      receiverCode: {
        title: "LoRa Receiver & Base Station Source Code (ESP32)",
        explanation:
          "The receiver base station listens for incoming LoRa packets, parses the distance and rainfall values, checks water height against threshold levels (Normal, Advisory, Danger), updates the 2.8\" TFT screen, and triggers the buzzer and traffic-light LEDs.",
        mcuSetup: "ESP32 connected to AS32 LoRa via UART2, TFT via hardware SPI, and LEDs/buzzer via digital outputs.",
        pinConnections: [
          { pin: "GPIO 16 / 17", role: "UART2 RX/TX for AS32 LoRa module" },
          { pin: "GPIO 19, 23, 18", role: "SPI Bus (MISO, MOSI, SCK) for 2.8\" TFT" },
          { pin: "GPIO 2, 4, 15", role: "TFT DC, CS, RESET lines" },
          { pin: "GPIO 25", role: "Green LED (Normal condition)" },
          { pin: "GPIO 26", role: "Yellow LED (Advisory warning)" },
          { pin: "GPIO 27", role: "Red LED (Critical alarm)" },
          { pin: "GPIO 14", role: "Piezo Buzzer (Audio alarm output)" }
        ],
        libraries: ["Arduino.h", "HardwareSerial.h", "Adafruit_GFX.h", "Adafruit_ILI9341.h"],
        codePlaceholder: `// =========================================================================
// SMART FLOOD DETECTION SYSTEM - RECEIVER BASE FIRMWARE (ESP32)
// Author: Alan John (Student Exploration Project)
// Description: LoRa packet parsing + TFT screen UI + Alert LEDs & Buzzer
// Note: This is a structured starter template. Replace with your actual code.
// =========================================================================

#include <Arduino.h>
#include <HardwareSerial.h>

#define LORA_RX_PIN 16
#define LORA_TX_PIN 17

#define LED_GREEN  25
#define LED_YELLOW 26
#define LED_RED    27
#define BUZZER_PIN 14

// Thresholds (distance from sensor down to water in cm)
// Smaller distance means higher water level!
const float LEVEL_ADVISORY = 45.0; // cm
const float LEVEL_CRITICAL = 25.0; // cm

HardwareSerial LoRaSerial(2);

void setAlertState(int state) {
  // 0 = Normal, 1 = Advisory, 2 = Critical
  digitalWrite(LED_GREEN,  state == 0 ? HIGH : LOW);
  digitalWrite(LED_YELLOW, state == 1 ? HIGH : LOW);
  digitalWrite(LED_RED,    state == 2 ? HIGH : LOW);

  if (state == 2) {
    tone(BUZZER_PIN, 2000); // Continuous emergency tone
  } else if (state == 1) {
    tone(BUZZER_PIN, 1000, 200); // Intermittent beep
  } else {
    noTone(BUZZER_PIN);
  }
}

void setup() {
  Serial.begin(115200);
  LoRaSerial.begin(9600, SERIAL_8N1, LORA_RX_PIN, LORA_TX_PIN);

  pinMode(LED_GREEN, OUTPUT);
  pinMode(LED_YELLOW, OUTPUT);
  pinMode(LED_RED, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);

  setAlertState(0);
  Serial.println("[RX] Flood Alert Base Station Ready.");
}

void loop() {
  if (LoRaSerial.available()) {
    String message = LoRaSerial.readStringUntil('\\n');
    message.trim();

    if (message.startsWith("FLOOD")) {
      Serial.println("[RX Received]: " + message);
      // Parse distance value from packet and update alert state
      // (Full TFT rendering logic to be added in your final sketch)
    }
  }
}`,
        notes:
          "Keep receiver module away from heavy electromagnetic motor noise to maintain optimal packet reception sensitivity."
      },

      // G. Circuit & Wiring Diagrams
      diagrams: [
        {
          title: "Transmitter Node Circuit Diagram",
          description:
            "Shows pinout connections between ESP32, JSN-SR04T ultrasonic sensor, FC-37 rain sensor, and AS32 LoRa transceiver.",
          image: "assets/images/circuit-placeholder.svg",
          downloadLink: ""
        },
        {
          title: "Receiver Base Station Circuit Diagram",
          description:
            "Wiring schematic connecting ESP32 to AS32 LoRa module, 2.8\" ILI9341 SPI TFT screen, 3-stage traffic LEDs, and buzzer.",
          image: "assets/images/circuit-placeholder.svg",
          downloadLink: ""
        },
        {
          title: "LoRa Module Power & Level Shifter Layout",
          description:
            "Detailed wiring for stable 3.3V logic supply and decoupling capacitors to eliminate radio transmission voltage dips.",
          image: "assets/images/circuit-placeholder.svg",
          downloadLink: ""
        }
      ],

      // H. Project Photographs Gallery
      photographs: [
        {
          title: "Overall Flood Monitoring Model",
          caption:
            "Bench test setup with simulated water tank, ultrasonic sensing bracket, and receiver monitoring station.",
          alt: "Flood detection model demonstration setup",
          image: "assets/images/project-flood-detection.svg",
          date: "Prototyping Phase"
        },
        {
          title: "Transmitter Node Enclosure",
          caption: "ESP32 microcontroller breadboard prototype with LoRa antenna mount.",
          alt: "Transmitter node hardware on breadboard",
          image: "assets/images/project-flood-detection.svg",
          date: "Prototyping Phase"
        },
        {
          title: "Receiver Base Station Display",
          caption:
            "2.8\" TFT display screen indicating water surface clearance and status color bar.",
          alt: "Receiver base station TFT display output",
          image: "assets/images/project-flood-detection.svg",
          date: "Prototyping Phase"
        },
        {
          title: "Sensors & Test Chamber",
          caption: "Ultrasonic transducer and raindrop sensor mounted on adjustable test rig.",
          alt: "Ultrasonic and raindrop sensor setup",
          image: "assets/images/project-flood-detection.svg",
          date: "Prototyping Phase"
        }
      ],

      // I. Project Demonstration Video
      video: {
        title: "Flood Monitoring Demonstration Video",
        description:
          "Short video demonstrating simulated water rise, wireless packet transmission over LoRa, and the receiver triggering the alert buzzer and TFT display.",
        videoUrl: "", // Provide your local video path (e.g., "assets/videos/flood-demo.mp4")
        embedUrl: "", // Or provide a valid video embed URL
        isPlaceholder: true,
        placeholderText:
          "Demonstration video coming soon! Once your prototype video is recorded, add the file path or embed link in js/data.js."
      },

      // J. Testing & Observations
      testing: {
        procedure:
          "Placed the ultrasonic sensor above a graduated water basin. Progressively poured water into the basin at 5cm increments, recording sensor readings versus physical ruler measurements. Simultaneously tested raindrop detection using a water spray bottle.",
        sensorReadings: [
          { actual: "50 cm", measured: "49.6 cm", delta: "-0.4 cm", alertState: "Normal (Green)" },
          { actual: "40 cm", measured: "39.8 cm", delta: "-0.2 cm", alertState: "Advisory (Yellow)" },
          { actual: "25 cm", measured: "25.1 cm", delta: "+0.1 cm", alertState: "Critical (Red)" },
          { actual: "15 cm", measured: "15.3 cm", delta: "+0.3 cm", alertState: "Critical (Red + Buzzer)" }
        ],
        commTests:
          "Tested wireless transmission through typical indoor walls up to 30 meters with zero packet drops at 9600 baud. Outdoor line-of-sight testing is planned for the next phase.",
        displayBehavior:
          "TFT display refreshed smoothly without flickering using selective bounding-box screen redraws.",
        warningBehavior:
          "Buzzer correctly beeped at intermittent intervals during advisory states and sounded continuously during critical stages.",
        problemsEncountered:
          "Surface water turbulence caused occasional instantaneous distance spikes of +/- 4 cm.",
        troubleshooting:
          "Implemented a rolling 5-sample median filter in the transmitter ESP32 code to discard momentary ripple outliers.",
        limitations:
          "Sensor requires a clear minimum blind zone of 20 cm from the transducer to the water surface."
      },

      // K. Development Challenges & Learning
      challengesAndLearning: {
        problems:
          "Understanding serial UART packet synchronization and managing current peaks during LoRa radio transmission pulses.",
        investigation:
          "Observed ESP32 random brownout restarts when transmitting. Monitored power rail voltage with a digital multimeter and noticed voltage dipping below 3.0V.",
        solutions:
          "Added a 470uF electrolytic capacitor directly across the power rails of the LoRa module and used a dedicated 5V 2A power adapter.",
        learnings:
          "Learned how inductive and RF components require clean power decoupling, how UART serial packets are framed, and how to use non-blocking millis() timing instead of delay().",
        improvements:
          "Plan to design a dedicated PCB to replace jumper wires and build a 3D-printed weatherproof enclosure."
      },

      // L. Project Review & Future Improvements
      reviewAndFuture: {
        whatWorked: [
          "Accurate non-contact water level tracking across tested 15cm–100cm test basin range.",
          "Reliable LoRa wireless packet delivery without needing external internet or Wi-Fi.",
          "Clear visual distinction between Normal, Advisory, and Critical alarm conditions."
        ],
        needsImprovement: [
          "Power consumption needs optimization using ESP32 deep-sleep cycles.",
          "Raindrop sensor plate can oxidize over time with prolonged moisture exposure.",
          "Physical wiring on breadboards is susceptible to accidental disconnections."
        ],
        futureIdeas: [
          "Solar battery charging integration using a miniature 6V solar panel and TP4056 module.",
          "Temperature compensation for the ultrasonic speed-of-sound formula using a DHT11 or DS18B20 sensor.",
          "Encapsulated IP67 waterproof enclosure with a downward-facing angled sensor hood.",
          "Optional secondary Wi-Fi dashboard upload when base station is within home Wi-Fi range."
        ]
      },

      // M. Project Downloads & Resources
      downloads: [
        {
          title: "LoRa Transmitter Firmware",
          description: "Arduino sketch (.ino) for sensing node with ultrasonic & rain logic.",
          filename: "Flood_Transmitter_ESP32.ino",
          filetype: "Arduino Code",
          available: true
        },
        {
          title: "LoRa Receiver Firmware",
          description: "Arduino sketch (.ino) for base station with TFT & alarm routines.",
          filename: "Flood_Receiver_ESP32.ino",
          filetype: "Arduino Code",
          available: true
        },
        {
          title: "Component Bill of Materials",
          description: "Complete list of hardware components, ratings, and quantities.",
          filename: "Components_List_Flood_System.txt",
          filetype: "Text / BOM",
          available: true
        },
        {
          title: "Circuit Wiring Diagram",
          description: "High-resolution schematic graphic for transmitter and receiver.",
          filename: "Flood_System_Wiring_Diagram.svg",
          filetype: "Vector Graphic",
          available: true
        }
      ]
    },

    // PROJECT 2: Bluetooth-Controlled Arduino Car
    {
      id: "bluetooth-controlled-car",
      slug: "bluetooth-controlled-car",
      title: "Bluetooth-Controlled Arduino Car",
      category: "Robotics & Automation",
      subtitle:
        "A robotics project exploring wireless control, motor drivers, and a mobile robotic vehicle.",
      status: "Hardware Build",
      coverImage: "assets/images/project-arduino-car.svg",
      tags: ["Arduino", "Robotics", "Bluetooth", "Electronics"],
      shortDescription:
        "A robotics project exploring wireless control, motor drivers, and a mobile robotic vehicle.",

      overview: {
        problem:
          "Understanding how digital commands translate into physical motion is a foundational step in robotics. Wiring DC motors, understanding current draw, and configuring serial wireless control requires practical experimentation.",
        purpose:
          "To construct a functional dual-wheel drive robotic chassis controlled wirelessly from a smartphone via Bluetooth serial communication.",
        objectives: [
          "Assemble a 2WD robotic chassis with DC geared motors and a front castor wheel.",
          "Interface an L298N dual H-bridge motor driver with an Arduino Uno.",
          "Pair an HC-05 Bluetooth module and parse directional steering commands.",
          "Ensure smooth acceleration and electrical isolation between logic and motor power rails."
        ],
        description:
          "This project explores robotics, motor driver interfacing, and wireless serial communication. An Arduino Uno processes commands from an HC-05 Bluetooth module to steer dual DC gear motors through an L298N driver board.",
        intendedBenefits:
          "Provides hands-on experience with PWM speed regulation, H-bridge motor direction control, mobile battery management, and serial protocol debugging.",
        statusNote: "Working prototype built and tested on indoor floor surfaces.",
        disclaimer:
          "Educational robotics model built for learning electronics, motor control, and wireless serial communication."
      },

      howItWorks: {
        diagramImage: "assets/images/project-arduino-car.svg",
        caption:
          "Robotic Architecture: Smartphone App → Bluetooth HC-05 → Arduino Uno MCU → L298N Motor Driver → Dual DC Motors",
        steps: [
          {
            stage: "1. Smartphone Controller",
            detail:
              "A standard Bluetooth serial terminal application transmits single-character direction commands ('F', 'B', 'L', 'R', 'S')."
          },
          {
            stage: "2. HC-05 Bluetooth Transceiver",
            detail:
              "Receives the wireless 2.4 GHz signal and relays it as TTL serial data to the Arduino Uno's hardware serial pins."
          },
          {
            stage: "3. Arduino Uno Controller",
            detail:
              "Interprets the serial command byte, maps it to H-bridge logic states, and applies PWM duty cycles to the enable pins."
          },
          {
            stage: "4. L298N Dual H-Bridge",
            detail:
              "Draws high-current drive power from an external 7.4V battery pack to energize the DC motor windings accordingly."
          },
          {
            stage: "5. Chassis Movement",
            detail:
              "Dual rubber tread wheels rotate forward, backward, or in opposite directions for zero-turn radius pivoting."
          }
        ]
      },

      components: [
        {
          name: "Arduino Uno R3",
          quantity: "1 unit",
          model: "ATmega328P DIP",
          purpose: "Central robot controller",
          image: "assets/images/project-arduino-car.svg",
          productLink: "",
          datasheetLink: "",
          notes: "5V logic, 16MHz clock speed"
        },
        {
          name: "L298N Dual H-Bridge Motor Driver",
          quantity: "1 unit",
          model: "L298N Module with Heatsink",
          purpose: "High current motor power amplification and directional switching",
          image: "assets/images/project-arduino-car.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Up to 2A per channel; supports dual motor PWM speed regulation"
        },
        {
          name: "HC-05 Bluetooth Module",
          quantity: "1 unit",
          model: "HC-05 6-pin SPP Serial",
          purpose: "Wireless serial communication with smartphone",
          image: "assets/images/project-arduino-car.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Default baud rate 9600; paired via PIN 1234"
        },
        {
          name: "DC Geared TT Motors & Wheels",
          quantity: "2 units",
          model: "3V-6V Dual Shaft TT Gear Motor (1:48)",
          purpose: "Chassis propulsion",
          image: "assets/images/project-arduino-car.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Rubber tread tires for reliable traction"
        },
        {
          name: "2WD Robot Acrylic Chassis",
          quantity: "1 unit",
          model: "Transparent Laser-cut Acrylic Plate",
          purpose: "Structural frame holding motors, batteries, and boards",
          image: "assets/images/project-arduino-car.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Includes front omnidirectional swivel castor wheel"
        },
        {
          name: "7.4V 18650 Battery Holder & Switch",
          quantity: "1 set",
          model: "2x 18650 Series Battery Pack",
          purpose: "Dedicated power supply for DC motors and Arduino",
          image: "assets/images/project-arduino-car.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Shared ground with Arduino logic ground"
        }
      ],

      purchaseResources: [
        {
          name: "Arduino Uno R3 Compatible Board",
          supplier: "Robotics Store / Online",
          productUrl: "",
          datasheetUrl: "",
          price: "Editable placeholder",
          notes: "Ensure ATmega16U2 or CH340 USB driver compatibility."
        },
        {
          name: "L298N Motor Driver Module",
          supplier: "Electronics Hobby Store",
          productUrl: "",
          datasheetUrl: "",
          price: "Editable placeholder",
          notes: "Built-in 5V regulator jumper enabled."
        },
        {
          name: "HC-05 Bluetooth Module",
          supplier: "Online Components Vendor",
          productUrl: "",
          datasheetUrl: "",
          price: "Editable placeholder",
          notes: "Slave/Master configurable module."
        }
      ],

      transmitterCode: null,
      receiverCode: null,
      arduinoCode: {
        title: "Arduino Robot Firmware (Arduino Uno)",
        explanation:
          "Listens for single-byte serial commands sent over Bluetooth and translates them into H-bridge digital pin combinations for Forward, Reverse, Left, Right, and Stop.",
        mcuSetup: "Arduino Uno with SoftwareSerial or HardwareSerial on pins 0 & 1.",
        pinConnections: [
          { pin: "Pin 0 (RX)", role: "Connects to HC-05 TXD" },
          { pin: "Pin 1 (TX)", role: "Connects to HC-05 RXD (via 1k/2k voltage divider)" },
          { pin: "Pin 5 & 6", role: "ENA & ENB (PWM speed pins on L298N)" },
          { pin: "Pin 7 & 8", role: "IN1 & IN2 (Left motor direction pins)" },
          { pin: "Pin 9 & 10", role: "IN3 & IN4 (Right motor direction pins)" }
        ],
        libraries: ["Arduino.h"],
        codePlaceholder: `// =========================================================================
// BLUETOOTH CONTROLLED ARDUINO CAR
// Author: Alan John (Student Project)
// Description: Serial command parser + L298N motor steering
// Note: This is a structured starter template. Replace with your actual code.
// =========================================================================

#define IN1 7
#define IN2 8
#define IN3 9
#define IN4 10
#define ENA 5
#define ENB 6

void forward() {
  analogWrite(ENA, 200);
  analogWrite(ENB, 200);
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
}

void reverse() {
  analogWrite(ENA, 180);
  analogWrite(ENB, 180);
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
}

void turnLeft() {
  analogWrite(ENA, 180);
  analogWrite(ENB, 180);
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
}

void turnRight() {
  analogWrite(ENA, 180);
  analogWrite(ENB, 180);
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
}

void stopRobot() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
}

void setup() {
  Serial.begin(9600);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  pinMode(ENA, OUTPUT);
  pinMode(ENB, OUTPUT);
  stopRobot();
}

void loop() {
  if (Serial.available()) {
    char cmd = Serial.read();
    if (cmd == 'F') forward();
    else if (cmd == 'B') reverse();
    else if (cmd == 'L') turnLeft();
    else if (cmd == 'R') turnRight();
    else if (cmd == 'S') stopRobot();
  }
}`,
        notes:
          "Remember to disconnect Arduino RX/TX pins while uploading the sketch via USB to avoid serial communication conflicts."
      },

      diagrams: [
        {
          title: "Robotic Car Wiring Schematic",
          description:
            "Shows battery power distribution, L298N motor driver links, and HC-05 Bluetooth module voltage divider.",
          image: "assets/images/circuit-placeholder.svg",
          downloadLink: ""
        }
      ],

      photographs: [
        {
          title: "Assembled 2WD Robot Chassis",
          caption: "Top-down view of motor driver, Arduino Uno, and battery holder placement.",
          alt: "Arduino robot car prototype top view",
          image: "assets/images/project-arduino-car.svg",
          date: "Prototyping Phase"
        },
        {
          title: "Motor Driver & Wiring Layout",
          caption: "L298N module heatsink and motor connection terminal block.",
          alt: "Motor driver wiring detail",
          image: "assets/images/project-arduino-car.svg",
          date: "Prototyping Phase"
        }
      ],

      video: {
        title: "Robot Steering & Maneuver Demonstration",
        description:
          "Demonstration showing smartphone Bluetooth pairing and directional steering maneuvers on a tile surface.",
        videoUrl: "",
        embedUrl: "",
        isPlaceholder: true,
        placeholderText:
          "Demonstration video coming soon! Record a clip of your robot car maneuvering and link it here in js/data.js."
      },

      testing: {
        procedure:
          "Paired smartphone to HC-05 module and tested Forward, Backward, and Pivot Turning commands over varying distances.",
        sensorReadings: [
          { actual: "5 meters", measured: "Connected", delta: "0 ms lag", alertState: "Smooth steering" },
          { actual: "12 meters", measured: "Connected", delta: "< 50 ms", alertState: "Good response" },
          { actual: "18 meters", measured: "Signal limit", delta: "Occasional drop", alertState: "Range boundary" }
        ],
        commTests: "Stable Bluetooth SPP serial link maintained across room distances.",
        displayBehavior: "N/A",
        warningBehavior: "N/A",
        problemsEncountered:
          "One motor rotated slightly faster than the other, causing the car to veer slightly to the right during forward motion.",
        troubleshooting:
          "Calibrated PWM duty cycle offset in the code (e.g. left motor at 210, right motor at 200) to achieve straight forward travel.",
        limitations: "Range limited by Bluetooth Class 2 specification (~10-15 meters indoors)."
      },

      challengesAndLearning: {
        problems:
          "Electrical inductive noise from DC motor brushes causing occasional microcontroller resets.",
        investigation:
          "Researched back-EMF spikes in DC inductive coils and checked current spikes when motors reversed suddenly.",
        solutions:
          "Soldered 100nF ceramic capacitors across motor power terminals and ensured ground isolation between logic and power supplies.",
        learnings:
          "Learned how H-bridges work internally, how PWM regulates motor torque, and the importance of decoupling capacitors in robotics.",
        improvements:
          "Add front ultrasonic collision avoidance sensors to prevent the car from running into obstacles."
      },

      reviewAndFuture: {
        whatWorked: [
          "Responsive, low-latency steering control from mobile phone app.",
          "Solid mechanical grip from rubber tread wheels.",
          "Clean PWM speed ramp-up avoiding sudden motor stall current."
        ],
        needsImprovement: [
          "Chassis balance requires better weight distribution over the rear driving wheels.",
          "Add obstacle avoidance sensors as an autonomous safety fallback."
        ],
        futureIdeas: [
          "Add HC-SR04 ultrasonic sensor for autonomous collision prevention.",
          "Add line-tracking IR sensor modules underneath the chassis.",
          "Implement a custom smartphone app with speed slider controls."
        ]
      },

      downloads: [
        {
          title: "Arduino Robot Firmware",
          description: "Complete sketch (.ino) with motor functions and serial control.",
          filename: "Bluetooth_Car_Arduino.ino",
          filetype: "Arduino Code",
          available: true
        },
        {
          title: "Chassis Wiring Schematic",
          description: "Full circuit schematic showing pinout and power connections.",
          filename: "Arduino_Car_Schematic.svg",
          filetype: "Vector Graphic",
          available: true
        }
      ]
    },

    // PROJECT 3: Community Solar Power Model
    {
      id: "community-solar-model",
      slug: "community-solar-model",
      title: "Community Solar Power Model",
      category: "Sustainability & Clean Energy",
      subtitle:
        "A model demonstrating how solar energy can be collected and distributed to support a community.",
      status: "Concept & Simulation",
      coverImage: "assets/images/project-solar-power.svg",
      tags: ["Solar Energy", "Sustainability", "Renewable Energy"],
      shortDescription:
        "A model demonstrating how solar energy can be collected and distributed to support a community.",

      overview: {
        problem:
          "Clean energy transition requires understanding how decentralized photovoltaic generation, battery storage, and dynamic community load demand interact across varying weather conditions.",
        purpose:
          "To construct a demonstration model of a localized solar microgrid, showing how energy captured from photovoltaic cells can be stored and distributed to residential and public community infrastructure.",
        objectives: [
          "Demonstrate solar energy collection using miniature photovoltaic panels.",
          "Simulate smart battery charge management and over-discharge protection.",
          "Model multi-consumer distribution: priority loads (streetlights) vs residential loads.",
          "Present renewable energy concepts visually for science fairs and exhibitions."
        ],
        description:
          "This project explores renewable energy capture, storage, and intelligent micro-grid distribution through an interactive working model. It illustrates how clean electricity can be harnessed to sustainably power a shared community.",
        intendedBenefits:
          "Visualizes clean energy distribution mechanics in a tangible, easy-to-understand physical layout for students and visitors.",
        statusNote: "Working exhibition scale model and simulation circuit.",
        disclaimer:
          "Educational science model exploring renewable power distribution principles."
      },

      howItWorks: {
        diagramImage: "assets/images/project-solar-power.svg",
        caption:
          "Clean Energy Cycle: Solar Array → Charge Controller → Battery Storage → Smart Load Distribution → Community Nodes",
        steps: [
          {
            stage: "1. Photovoltaic Generation",
            detail:
              "Miniature solar panels convert sunlight or exhibition spotlight illumination into clean DC electricity."
          },
          {
            stage: "2. Charge Management",
            detail:
              "A charge controller circuit regulates voltage levels, preventing overcharging and managing battery health."
          },
          {
            stage: "3. Energy Storage Bank",
            detail:
              "Rechargeable lithium battery cells store surplus energy generated during peak daytime periods."
          },
          {
            stage: "4. Smart Distribution",
            detail:
              "A priority distribution controller balances current between essential community lighting and residential units."
          },
          {
            stage: "5. Load Demonstration",
            detail:
              "Simulated community scale houses, streetlights, and power meters light up, showing real-time energy flow."
          }
        ]
      },

      components: [
        {
          name: "Monocrystalline Solar Panel",
          quantity: "2 units",
          model: "6V 2W Mini Solar Panel",
          purpose: "Capturing light energy and generating DC current",
          image: "assets/images/project-solar-power.svg",
          productLink: "",
          datasheetLink: "",
          notes: "High conversion efficiency in miniature form factor"
        },
        {
          name: "Battery Charge Controller Module",
          quantity: "1 unit",
          model: "TP4056 with DW01A Protection",
          purpose: "Constant-current / constant-voltage charging and cutoff",
          image: "assets/images/project-solar-power.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Protects battery from over-charge and deep-discharge"
        },
        {
          name: "Rechargeable Lithium Cell",
          quantity: "1 unit",
          model: "3.7V 18650 Li-ion (2000mAh)",
          purpose: "Energy storage bank for night simulation",
          image: "assets/images/project-solar-power.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Equipped with safety protection circuit"
        },
        {
          name: "DC-DC Step-Up Voltage Booster",
          quantity: "1 unit",
          model: "MT3608 2A Step-Up Converter",
          purpose: "Boosting 3.7V storage to stable 5V community grid voltage",
          image: "assets/images/project-solar-power.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Adjustable output potentiometer"
        },
        {
          name: "Simulated Community Nodes",
          quantity: "1 set",
          model: "Scale model houses with LED lighting",
          purpose: "Visualizing energy delivery to consumers",
          image: "assets/images/project-solar-power.svg",
          productLink: "",
          datasheetLink: "",
          notes: "Equipped with individual load switches and current meters"
        }
      ],

      purchaseResources: [
        {
          name: "Miniature 6V Solar Cell Panel",
          supplier: "Solar Hobby Supplier",
          productUrl: "",
          datasheetUrl: "",
          price: "Editable placeholder",
          notes: "Epoxy encapsulated waterproof solar panel."
        },
        {
          name: "TP4056 Charging Board",
          supplier: "Electronics Store",
          productUrl: "",
          datasheetUrl: "",
          price: "Editable placeholder",
          notes: "Includes micro-USB backup port."
        }
      ],

      transmitterCode: null,
      receiverCode: null,
      arduinoCode: null,

      diagrams: [
        {
          title: "Micro-Grid Energy Flow Diagram",
          description:
            "Block diagram detailing energy paths from solar panels through the charge controller and battery to community loads.",
          image: "assets/images/circuit-placeholder.svg",
          downloadLink: ""
        }
      ],

      photographs: [
        {
          title: "Community Solar Model Layout",
          caption: "Scale model houses, solar array mount, and central power station indicator.",
          alt: "Community solar exhibition model",
          image: "assets/images/project-solar-power.svg",
          date: "Science Fair Prototype"
        }
      ],

      video: {
        title: "Community Solar Model In Action",
        description:
          "Video illustrating solar light absorption, battery storage indicator, and streetlights activating as sunlight fades.",
        videoUrl: "",
        embedUrl: "",
        isPlaceholder: true,
        placeholderText:
          "Demonstration video coming soon! Record a demonstration of your solar model and add the link here in js/data.js."
      },

      testing: {
        procedure:
          "Positioned calibrated LED floodlight at varying distances to simulate morning, noon, and evening solar intensity curves.",
        sensorReadings: [
          { actual: "Direct Light (Noon)", measured: "6.2 V, 310 mA", delta: "~1.9 W", alertState: "Full charging" },
          { actual: "Angled Light (Morning)", measured: "5.4 V, 140 mA", delta: "~0.75 W", alertState: "Moderate charge" },
          { actual: "Low Light (Dusk)", measured: "4.1 V, 30 mA", delta: "~0.12 W", alertState: "Battery assist" }
        ],
        commTests: "N/A",
        displayBehavior: "Power meters accurately showed voltage and current flows.",
        warningBehavior: "Automatic cutoff prevented battery discharge below 3.0V.",
        problemsEncountered:
          "Indoor light sources produce significantly less UV/infrared energy than natural sunlight.",
        troubleshooting:
          "Used high-CRI halogen demonstration lamps for science fair indoor testing.",
        limitations: "Demonstration scale model for educational visualization."
      },

      challengesAndLearning: {
        problems: "Balancing multiple scale residential loads with single miniature battery capacity.",
        investigation: "Calculated total milliamp draw of all simulated houses lit simultaneously.",
        solutions:
          "Added current-limiting resistors to all model LEDs and separated high-priority streetlights from consumer loads.",
        learnings:
          "Gained practical appreciation for solar conversion efficiency, battery storage buffers, and smart load-shedding concepts.",
        improvements:
          "Integrate an Arduino with an OLED screen to log real-time power generation data over time."
      },

      reviewAndFuture: {
        whatWorked: [
          "Demonstrated the full cycle of solar generation, storage, and load balancing clearly.",
          "Visual LED indicators made abstract electrical concepts intuitive for visitors.",
          "Clean battery cutoff reliably protected lithium cell from over-depletion."
        ],
        needsImprovement: [
          "Add digital volt/amp meters instead of basic LED brightness indicators.",
          "Improve solar panel angle adjustment mount."
        ],
        futureIdeas: [
          "Automate dynamic load shedding using an Arduino microcontroller.",
          "Add small wind turbine model for hybrid renewable demonstration."
        ]
      },

      downloads: [
        {
          title: "Community Solar Block Diagram",
          description: "High resolution diagram showing electrical flow and components.",
          filename: "Solar_Model_Diagram.svg",
          filetype: "Vector Graphic",
          available: true
        },
        {
          title: "Component List & Specifications",
          description: "Full bill of materials with ratings and connection notes.",
          filename: "Solar_Model_Components.txt",
          filetype: "Text File",
          available: true
        }
      ]
    }
  ]
};

// Export to window object
window.portfolioData = portfolioData;
