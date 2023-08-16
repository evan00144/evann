import { Container, Grid, Stack } from "@mui/material";
import CardItem from "./CardItem";
import { useState } from "react";
import ProjectSidebar from "./ProjectSidebar";

export default function SectionThreePageTwo() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [selectedProject, setSelectedProject] = useState<iProject>({
    title: "",
    content: "",
    thumbnail: "",
    about: "",
    implementation: "",
    role: "",
    tech: [],
    website: "",
    img: [],
  });

  interface iProject {
    title: string;
    content: string;
    thumbnail: string;
    about: string;
    implementation: string;
    role: string;
    tech: string[];
    website?: string;
    img: string[];
  }
  const project: iProject[] = [
    {
      title: "Job Portal",
      content:
        "Job portal is a website project that provides a platform for submitting job applications to companies. This website is created to enhance the experience of applying for jobs at companies, making it clearer and more engaging. It also facilitates applicants in uploading their resumes. The design of the website is modern and responsive.",
      thumbnail: "/img/jobportal/thumbnail.png",
      about:
        "Job portal is a website project that provides a platform for submitting job applications to companies. This website is created to enhance the experience of applying for jobs at companies, making it clearer and more engaging. It also facilitates applicants in uploading their resumes. The design of the website is modern and responsive.",
      implementation: "Project Intern",
      role: "Implementation of Several Sections on the Page, Engaging Animation, and Responsive Design.",
      tech: ["HTML", "CSS", "Bootstrap", "GSAP", "Javascript"],
      website: "teslink-hmjp22.vercel.app",
      img: [
        "/img/jobportal/first.png",
        "/img/jobportal/second.png",
        "/img/jobportal/third.png",
      ],
    },
    {
      title: "Sidesa Workspace",
      content:
        "Sidesa Workspace goal is to develop an efficient workspace management website, facilitating Create, Read, Update, and Delete (CRUD) operations for workspaces. Users can seamlessly generate, view, modify, and remove workspaces as needed. Each workspace will feature a dynamic menu system, empowering users to allocate precise access to distinct menus within their workspace. This functionality ensures customized configuration and management of features and pages unique to each workspace. Additionally, the inclusion of role management allows users to assign roles with specific menu access within a workspace, providing granular control over permissions and enhancing user engagement with menus tailored to their designated workspace.",
      thumbnail: "/img/sidesaws/thumbnail.png",
      about: `The project aims to develop a website designed for efficient workspace management. The website will facilitate CRUD operations (Create, Read, Update, Delete) for workspaces, enabling users to generate, view, modify, and remove workspaces based on their requirements.

        Each workspace created will feature a menu system that empowers users to allocate access to particular menus within the workspace. This functionality permits users to configure and manage access to specific features and pages unique to each workspace.
        
        Furthermore, the project will incorporate a role management feature. This feature will allow users to designate roles that possess access to specific menus within a workspace. Consequently, this will offer more precise control over access rights, ensuring that each user or role possesses distinct permissions when engaging with menus within the designated workspace.`,
      implementation: "Project Intern",
      role: "Implementation of Menu Management in Workspaces and Role & User Management",
      tech: ["HTML", "SCSS", "Bootstrap", "Typescript", "React JS"],
      website: "-",
      img: [
        "/img/sidesaws/1.png",
        "/img/sidesaws/2.png",
        "/img/sidesaws/4.png",
        "/img/sidesaws/5.png",
        "/img/sidesaws/6.png",
        "/img/sidesaws/7.png",
        "/img/sidesaws/8.png",
      ],
    },
    {
      title: "AMS",
      content:
        "AMS is a comprehensive website platform dedicated to asset management. Users gain the capability to execute CRUD operations on diverse asset types, spanning images, profiles, accounts, locations, servers, databases, and more. These features empower users to seamlessly add, view, edit, and delete asset data according to business requirements, thus granting full control over asset management encompassing visual elements and account information. Complementing the CRUD functionalities, the platform integrates a robust log history mechanism that diligently documents user-initiated CRUD actions—whether adding, editing, or deleting data. This historical record functions as an audit trail, fostering transparency and security by meticulously tracking user activities. In essence, the platform streamlines asset management, harnessing the flexibility of CRUD operations for effective handling, coupled with the transparency and security upheld by the log history. This synergy enhances the efficiency and efficacy of asset management processes, facilitating seamless monitoring and tracking of all activities transpiring within the platform.",
      thumbnail: "/img/ams/thumbnail.png",
      about: `The project involves creating a website platform focused on managing a wide range of assets. Users can perform CRUD operations on various types of asset data, including images, profiles, accounts, locations, servers, databases, and more.

        With the provided CRUD features, users can easily add, view, edit, and delete asset data based on business needs. This gives users complete control over managing their assets, from visuals to account information.
        
        In addition to CRUD, the platform includes a log history feature that records user-initiated CRUD actions. Whether it's adding, editing, or deleting data, the system automatically creates a log history, detailing each change. This log acts as a historical record, serving as an audit tool to track user activities.
        
        As a result, the platform offers streamlined asset management. CRUD provides the flexibility for effective asset handling, while the log history ensures transparency and security. This enhances efficiency and efficacy in asset management, making it easy to track and monitor all activities within the platform.
        `,
      implementation: "Company Project",
      role: "Implement UI Design, CRUD Operations, Data Display such as Table, create Log Action History, etc",
      tech: [
        "HTML",
        "SCSS",
        "Bootstrap",
        "Typescript",
        "React JS",
        "Mapbox GL",
      ],
      website: "-",
      img: [
        "/img/ams/1.png",
        "/img/ams/2.png",
        "/img/ams/3.png",
        "/img/ams/4.png",
        "/img/ams/5.png",
        "/img/ams/6.png",
      ],
    },
    {
      title: "Eb Chat",
      content:
        "The project entails the creation of a specialized chat platform tailored for in-depth discussions and explorations of economic, political, governmental, and related subjects. Within this platform, users engage in interactive chat sessions to receive comprehensive responses and insights regarding their inquiries and topics of interest. The integrated chat system enriches the user experience by offering an array of response formats, encompassing visual elements like charts to illustrate data trends, images for contextual references, and videos for detailed explanations. Moreover, the system adeptly generates responses with diverse formatting, including paragraph separation, bold or italic text emphasis, and structured information lists. Notably, the platform introduces innovative features such as concept mapping to visually depict relationships between economic and political concepts, augmenting users' understanding, and leveraging geographic maps to illustrate data linked to specific regions or political occurrences. In its entirety, the project's overarching objective is to provide users with a vibrant and interactive chat experience, enabling them to glean comprehensive insights into intricate economic, political, and governmental subjects through engaging interactions with the system.",
      thumbnail: "/img/ebchat/thumbnail.png",
      about: `The project involves creating a specialized chat platform that focuses on discussing and exploring economic, political, governmental, and related subjects. Within this platform, users can interact through chat to receive detailed responses and insights about their questions and topics.

        The chat system integrated into the platform offers a diverse range of response formats to enhance the user experience. These formats include visual elements such as charts for illustrating economic and political data trends, images that provide relevant visual context, and videos that offer more in-depth explanations. Additionally, the system can generate responses with special formatting, such as separating paragraphs, emphasizing text with bold or italic styles, and creating structured lists of information.
        
        Moreover, the platform introduces concept mapping to visually showcase relationships between various economic and political concepts, adding a new layer of understanding. Geographic maps can also be utilized to illustrate data tied to specific regions or political events.
        
        Overall, this project aims to provide users with a dynamic and interactive chat experience, enabling them to gain comprehensive insights into complex economic, political, and governmental subjects through engaging interactions with the system.
        `,
      implementation: "Company Project",
      role: "Implement UI Design, User & Role Management, Chat Interaction, Custom Chat Response",
      tech: ["HTML", "SCSS", "Bootstrap", "Typescript", "React JS","eChart"],
      website: "-",
      img: [
        "/img/ebchat/1.png",
        "/img/ebchat/2.png",
        "/img/ebchat/3.png",
        "/img/ebchat/4.png",
        "/img/ebchat/5.png",
        "/img/ebchat/6.png",
      ],
    },
    {
      title: "Sidesa",
      content:
        "Sidesa project is a development of a website platform that serves as an integral data management hub for a village community. Within this comprehensive platform, users wield extensive control to execute a range of data-related actions, including creating, viewing, updating, and deleting information. The website's structure encompasses distinct sections meticulously designed to facilitate efficient data management. These segments encompass a main page furnishing essential village details like population figures and ongoing projects, a population data section enabling manipulation of resident information such as names, addresses, birthdates, and marital statuses, a financial data area to oversee village financial records like budgets, income, expenses, and financial reports, and a document upload segment streamlining the submission of vital documents including permits and official papers. Adding to its functionality, the platform introduces a dedicated administrative interface, bestowing village administrators with special access rights to monitor and manage uploaded data. Through this administrative functionality, administrators exercise control over data submissions, granting approval and oversight over content provided by village residents and pertinent parties, thus fostering efficient village administration.",
      thumbnail: "/img/sidesa/thumbnail.png",
      about: `Sidesa project involves creating a website platform that serves as a data management hub for a village. Within this platform, users have comprehensive control to perform various data-related actions like creating, viewing, updating, and deleting.

        The website comprises different sections to assist users in managing data efficiently. These sections include:
        
        The main page offers a snapshot of vital village details, such as population figures, ongoing projects, and general information.
        
        The population data section allows users to input, access, modify, and remove village resident information. This covers personal particulars like names, addresses, birthdates, and marital statuses.
        
        The financial data area empowers users to handle village financial records, encompassing budgets, income, expenses, and financial reports.
        
        The document upload segment facilitates the uploading of significant documents such as permits, notifications, and other official papers relevant to village administration.
        
        Furthermore, the platform presents a dedicated administrative interface. Within this interface, village administrators possess special access privileges to monitor uploaded data. This functionality empowers administrators to oversee and manage data submitted by village residents or pertinent parties. Administrators can grant approval or manage submissions as necessary.`,
      implementation: "Company Project",
      role: "Implement UI Design, CRUD Operations, Data Display such as Table, etc",
      tech: ["HTML", "SCSS", "Bootstrap", "Typescript", "React JS"],
      website: "-",
      img: [
        "/img/sidesa/1.png",
        "/img/sidesa/2.png",
        "/img/sidesa/3.png",
        "/img/sidesa/4.png",
        "/img/sidesa/5.png",
        "/img/sidesa/6.png",
        "/img/sidesa/8.png",
      ],
    },
    {
      title: "Thesis",
      content:
        "This research employs the XLM-R model for sentiment analysis on Indonesian product reviews. The model is trained on a multilingual dataset encompassing 100 languages, including German, English, Spanish, and French. Notably, the XLM-R model undergoes specific training on Indonesian language alongside other languages. Indonesian is chosen due to its low-resource nature. The study aims to evaluate XLM-R's performance in sentiment classification for low-resource languages. The results demonstrate the model's proficiency in classifying Indonesian text. The model trained with French achieves the highest accuracy of 83.25%. Transfer learning is successfully employed, and the inclusion of Indonesian data significantly impacts accuracy. Notably, the XLM-R model without Indonesian data still exhibits competitive accuracy. The addition of Indonesian data significantly impacts the accuracy, but XLM-R model without Indonesian data still demonstrates competitive accuracy.",
      thumbnail: "/img/skripsi/thumbnail.png",
      about:
        "This research employs the XLM-R model for sentiment analysis on Indonesian product reviews. The model is trained on a multilingual dataset encompassing 100 languages, including German, English, Spanish, and French. Notably, the XLM-R model undergoes specific training on Indonesian language alongside other languages. Indonesian is chosen due to its low-resource nature. The study aims to evaluate XLM-R's performance in sentiment classification for low-resource languages. The results demonstrate the model's proficiency in classifying Indonesian text. The model trained with French achieves the highest accuracy of 83.25%. Transfer learning is successfully employed, and the inclusion of Indonesian data significantly impacts accuracy. Notably, the XLM-R model without Indonesian data still exhibits competitive accuracy. The addition of Indonesian data significantly impacts the accuracy, but XLM-R model without Indonesian data still demonstrates competitive accuracy.",
      implementation: "Bachelor Degree Thesis",
      role: "Researcher",
      tech: ["Python", "Google Colab"],
      img: ["/img/skripsi/thumbnail.png"],
    },
  ];

  return (
    <Stack
      id={"section-three"}
      position={"relative"}
      direction={"row"}
      justifyContent={"end"}
      sx={{
        [openSidebar ? "height" : "minHeight"]: "100vh",
        overflow: "hidden",
      }}
    >
      <Stack
        sx={{
          position: openSidebar ? "absolute" : "",
          "&::-webkit-scrollbar-track": {
            WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
            borderRadius: "10px",
            backgroundColor: "transparent",
            marginRight: "1.5rem",
          },
          "&::-webkit-scrollbar": {
            width: "7px",
            height: "7px",
            backgroundColor: "transparent",
            marginRight: "1.5rem",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
            backgroundColor: "#555",
            marginRight: "1.5rem",
          },
          overflowY: "scroll",
        }}
        left={0}
        width={"100%"}
        height={"100%"}
        // overflow={"scroll"}
        padding={"5rem 0 2rem 0"}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4.5}
            sx={{ width: openSidebar ? "75%" : "100%" }}
          >
            {project.map((proj, i) => (
              <Grid item key={i} sm={openSidebar ? 6 : 4}>
                <CardItem
                  handleClick={() => {
                    setOpenSidebar(true);
                    setSelectedProject(proj);
                    document.getElementById("section-three")?.scrollIntoView();
                  }}
                  title={proj.title}
                  bg={` ${
                    i % 2 !== 0
                      ? "linear-gradient(180deg, rgba(5,7,15,.2) 20%, rgba(157,142,254,.2) 100%"
                      : "linear-gradient(180deg, rgba(5,7,15,.2) 20%, rgba(64,176,132,.2) 100%"
                  });
                `}
                  content={proj.content}
                  // img="/logo-dark.svg"
                  img={proj.thumbnail}
                  index={i}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
      {openSidebar && (
        <ProjectSidebar
          handleCloseSidebar={() => setOpenSidebar(false)}
          item={selectedProject}
        />
      )}
    </Stack>
  );
}
