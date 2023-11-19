import RealTimeMonitoring from '../../assets/Layout/real_time_monitoring.svg';
import ResponseRecovery from '../../assets/Layout/response_recovery.svg';
import ThreatDetection from '../../assets/Layout/threat_detection.svg';

export const SITE_TEXT = {
    HOMEPAGE_HEADING: 'AI Powered Security Monitoring System',
    HOMEPAGE_HEADING_2: 'Boost your cyber security with hackstrut',
    HOMEPAGE_SUB_TXT: 'Powered by cutting-edge AI, Hackstrut ensures ironclad protection for your digital fortress. Stay steps ahead of threats.',
    HOMEPAGE_OPTIONS: [
        {
            title: 'AI-Powered Threat Detection',
            imgSrc: ThreatDetection,
            subText: 'Utilize advanced artificial intelligence algorithms to identify and analyze potential threats in real-time',
        },
        {
            title: 'Real-time monitoring',
            imgSrc: RealTimeMonitoring,
            subText: "Constantly monitor and assess your system's security status, providing instant alerts for any suspicious activities",
        },
        {
            title: 'Incident Response and Recovery',
            imgSrc: ResponseRecovery,
            subText: 'In the dynamic landscape of cybersecurity, the ability to respond swiftly to incidents and recover effectively is paramount.',
        }
    ]
}
