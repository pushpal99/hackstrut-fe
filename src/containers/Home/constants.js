import RealTimeMonitoring from '../../assets/Layout/real_time_monitoring.svg';
import ResponseRecovery from '../../assets/Layout/response_recovery.svg';
import ThreatDetection from '../../assets/Layout/threat_detection.svg';
import ChartBarIcon from '../../assets/Layout/chart_bar_icon.png';
import DecentralizeIcon from '../../assets/Layout/decentralize_icon.png';
import IncidentResponse from'../../assets/Layout/incident_response_icon.png';
import ScanIcon from '../../assets/Layout/scanning_icon.png';
import PrioritizationIcon from '../../assets/Layout/prioritization_icon.png';
import Remediation from'../../assets/Layout/remediation.png';

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
    ],
    SUPERCHARGE_HEAD_TXT: 'Supercharge your security with Hackstrut',
    SUPERCHARGE_SUB_HEAD: 'Transform your cybersecurity strategy and safeguard your digital assets with our cutting-edge solution',
    ABOUT_DESC: 'Introducing Hackstrut, a cutting-edge leader in AI-based cybersecurity solutions. Our company is dedicated to revolutionizing the way organizations safeguard their digital assets against evolving cyber threats. Leveraging the power of artificial intelligence, we have developed a suite of innovative products that redefine the standards of security, ensuring comprehensive protection and proactive threat management.',
    THREAT_DETECTION_OPT: [
        {
            title: 'Real-time Threat detection',
            imgSrc: DecentralizeIcon,
        },
        {
            title: 'Incident Response',
            imgSrc: IncidentResponse,
        },
        {
            title: 'Predictive Analysis',
            imgSrc: ChartBarIcon,
        },
    ],
    VULNERABILITY_OPT: [
        {
            title: 'Vulnerbility Scanning',
            imgSrc: ScanIcon,
        },
        {
            title: 'Vulnerbility Prioritization',
            imgSrc: PrioritizationIcon,
        },
        {
            title: 'Vulnerbility Prioritization',
            imgSrc: Remediation,
        },
    ]
}
