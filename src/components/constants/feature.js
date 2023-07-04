import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faChartPie, faPencilRuler, faUser, faChartSimple, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export const list = [
    {
      id: 1,
      title: "Full-Funnel Social Analytics",
      description: `Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new audiences.`,
      info: [
        {
          id: 1,
          title: "Social Conversations",
          icon: <FontAwesomeIcon icon={faComment} flip="horizontal" />,
          iconColor: "icon-info",
          iconCircle: false,
          description: `Gain access to the demographics, psychographics, and location of unique people.`,
        },
        {
          id: 2,
          title: "Analyze Performance",
          icon: <FontAwesomeIcon icon={faChartPie} />,
          iconColor: "icon-success",
          iconCircle: false,
          description: `Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights.`,
        },
        {
          id: 3,
          title: "Measure Conversions",
          icon: <FontAwesomeIcon icon={faPencilRuler} />,
          iconColor: "icon-warning",
          iconCircle: false,
          description: `Track actions taken on your website, understand the impact on your bottom line.`,
        },
      ],
    },
    {
      id: 2,
      classes: "feature-bg-img",
      title: "Trello lets you work more.",
      description: `Trello's boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.`,
      info: [
        {
          id: 1,
          title: "Work With Any Team",
          icon: <FontAwesomeIcon icon={faUser} />,
          iconColor: "icon-info",
          iconCircle: true,
          description: `Whether it's for work or even the next family vacation, Trello helps your team.`,
        },
        {
          id: 2,
          title: "A Productivity Platform",
          icon: <FontAwesomeIcon icon={faChartSimple} />,
          iconColor: "icon-danger",
          iconCircle: true,
          description: `Integrate the apps your team already uses directly into your workflow.`,
        },
        {
          id: 3,
          title: "Always In Sync",
          icon: <FontAwesomeIcon icon={faArrowsRotate} />,
          iconColor: "icon-warning",
          iconCircle: true,
          description: `No matter where you are, Trello stays in sync across all of your devices.`,
        },
      ],
    },
    {
      id: 3,
      title: "Simpler. Smarter. Faster.",
      description: `The CloudCheckr Cloud Management Platform (CMP) provides full visibility and control to reduce costs, improve cybersecurity posture, and automate critical tasks.`,
      info: [
        {
          id: 1,
          title: "Asset Management",
          icon: "objects_globe",
          iconColor: "icon-success",
          iconCircle: true,
          description: `Cross-account dashboards provide sophisticated reporting for enterprise.`,
        },
        {
          id: 2,
          title: "Resource Utilization",
          icon: "education_atom",
          iconColor: "icon-danger",
          iconCircle: true,
          description: `CloudCheckr provides summary and detailed usage statistics for resources.`,
        },
        {
          id: 3,
          title: "Self-Healing",
          icon: "tech_watch-time",
          iconColor: "icon-info",
          iconCircle: true,
          description: `CloudCheckr enables users to save money, time, and effort.`,
        },
      ],
    },
  ];