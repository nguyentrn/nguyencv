import React, { useContext } from "react";
import "../../animate.css";
import {
  IoIosCall,
  IoIosMail,
  IoIosPin,
  IoIosGlobe,
  IoIosArrowRoundBack,
  IoMdDownload
} from "react-icons/io";
import { LanguageContext } from "../../contexts/language.context";
import {
  CVPage,
  CVNavigate,
  CVContainer,
  Header,
  Main,
  Sidebar,
  Footer,
  Avatar,
  Name,
  AboutMe,
  Contact,
  Follow,
  Skills,
  Experience,
  Educations,
  Interests,
  SkillBar
} from "./cv-full.styles";

const contents = [
  {
    aboutMe: (
      <div>
        <p>
          A Web Developer from Ho Chi Minh City. I'm focusing on expanding my
          solid experience in Frontend and Single Page App development, also I
          have a basic knowledge in Backend which I learned from university.
        </p>
        <p>
          My passion is applying what did I know about technology to build
          something useful (for me and for everyone). That motivates me to learn
          new stuffs day by day and to become a Senior Fullstack Developer one
          day !
        </p>
      </div>
    ),
    age: "Age :",
    phone: "Phone :",
    email: "Email :",
    about: "About me",
    contact: "Contact",
    connect: "Connect",
    skills: "skills",
    experience: "Experience",
    educations: "Educations",
    interests: "Interests",
    myAddress: "Binh Chanh, Ho Chi Minh City",
    exactAddress: "14th Street, Trung Son,",
    university: "University of Science, VNU-HCM",
    faculty: "Information Technology",
    major: "Major: Information System"
  },

  {
    aboutMe: (
      <div>
        <p>
          Hiện tại tập trung phát triển kỹ năng Frontend và Single Page App.
          Mình cũng có kiến thức Backend cơ bản tích lũy từ trường đại học.
        </p>
        <p>
          Đam mê việc ứng dụng công nghệ để xây dựng những ứng dụng có giá trị
          thực tiễn. Đó là động lực giúp mình yêu thích và duy trì việc lập
          trình hằng ngày. Mong muốn trở thành một lập trình viên Fullstack
          trong tương lai gần !
        </p>
      </div>
    ),

    age: "Tuổi :",
    phone: "Điện thoại :",
    email: "Email :",
    about: "Mục tiêu",
    contact: "Liên hệ",
    connect: "Kết nối",
    skills: "Kỹ năng",
    experience: "Kinh nghiệm",
    educations: "Học vấn",
    interests: "Sở thích",

    myAddress: "Bình Chánh, TP. Hồ Chí Minh",
    exactAddress: "Đường 14, KDC Trung Sơn,",
    university: "Đại học Khoa học Tự nhiên TP.HCM",
    faculty: "Khoa Công nghệ Thông tin",
    major: "Chuyên ngành: Hệ thống Thông tin"
  }
];

const socials = [
  { name: "Facebook", link: "facebook.com/nguyentrn" },
  { name: "LinkedIn", link: "linkedin.com/nguyentrn" },
  { name: "Github", link: "github.com/nguyentrn" }
];

const skillsExp = [
  { name: "html/css", exp: "70%" },
  { name: "mysql/posgresql", exp: "40%" },
  { name: "javascript", exp: "60%" },
  { name: "photoshop", exp: "30%" },
  { name: "reactjs", exp: "50%" },
  { name: "c/c++", exp: "50%" }
];
let viewport = "100";

const CV = ({ history }) => {
  console.log(history);
  const { isVietnamese, toggleIsVietnamese } = useContext(LanguageContext);
  const {
    age,
    phone,
    email,
    about,
    aboutMe,
    contact,
    connect,
    skills,
    experience,
    educations,
    interests,
    myAddress,
    exactAddress,
    university,
    faculty,
    major
  } = contents[isVietnamese ? 1 : 0];
  return (
    <CVPage>
      <CVContainer size={viewport}>
        <Header>
          <Avatar>
            <img src="/avatar.jpg" alt="avatar" />
          </Avatar>
          <Name>
            {"Trần Nguyên".toUpperCase()}
            <span>{"Frontend Developer".toUpperCase()}</span>
          </Name>
        </Header>
        <Main>
          <Experience>
            <h1>
              <span />
              {experience}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
              suscipit dolor, in auctor neque. Nulla malesuada blandit tellus,
              sed feugiat quam. Curabitur vel est in eros pretium sollicitudin
              quis nec diam. Aenean fringilla ipsum vitae congue condimentum.
              Etiam venenatis, dolor ut porttitor tristique, leo leo pharetra
              metus, ac volutpat tortor lectus quis mauris. Vivamus faucibus sem
              vel ex scelerisque, quis venenatis libero tristique. Integer et
              ultrices tellus. In maximus lorem elit, sed aliquet neque
              elementum et. Sed urna justo, sodales vitae rutrum eu, fermentum
              congue lectus. Ut eget lectus mollis, condimentum tortor sed,
              rutrum lorem. Ut efficitur nisl vitae libero consequat ultrices.
              Vivamus a auctor lacus. In dolor
            </p>
          </Experience>
          <Educations>
            <h1>
              <span />
              {educations}
            </h1>
            <div>
              <em>
                <span>{university}</span>
                <span>2014-2019</span>
              </em>
              <strong>{faculty}</strong>
              <p>{major}</p>
            </div>
          </Educations>
          <Skills>
            <h1>
              <span />
              {skills}
            </h1>
            <div>
              {skillsExp.map(skill => (
                <div>
                  <h6>{skill.name.toUpperCase()}</h6>
                  <SkillBar value={skill.exp}>
                    <span>
                      <span />
                    </span>
                  </SkillBar>
                </div>
              ))}
            </div>
          </Skills>
          <Interests>
            <h1>
              <span />
              {interests}
            </h1>
            <p>{(age, phone, email, myAddress, experience, exactAddress)}</p>
            <p>Vivamus faucibus sem
              vel ex scelerisque, quis venenatis libero tristique. Integer et
              ultrices tellus. In maximus lorem elit, sed aliquet neque
              elementum et. Sed urna justo, sodales vitae rutrum eu, fermentum
              congue lectus. Ut eget lectus mollis, condimentum tortor sed,
              rutrum lorem. Ut efficitur nisl vitae libero consequat ultrices.
              Vivamus a auctor lacus. In dolor</p>
          </Interests>
        </Main>
        <Sidebar>
          <AboutMe>
            <h1>
              <span />
              {about}
            </h1>
            {aboutMe}
          </AboutMe>
          <Contact>
            <h1>
              <span />
              {contact}
            </h1>
            <div>
              <div>
                <IoIosCall size={`${0.014 * viewport}vw`} />
                <p>(+84) 869 222 048</p>
              </div>
              <div>
                <IoIosMail size={`${0.014 * viewport}vw`} />
                <p>nguyentran0113@gmail.com</p>
              </div>
              <div>
                <IoIosPin size={`${0.014 * viewport}vw`} />
                <p>
                  14th Street, Trung Son,<span>Binh Chanh, Ho Chi Minh</span>
                </p>
              </div>
              <div>
                <IoIosGlobe size={`${0.014 * viewport}vw`} />
                <p>www.nguyentran.xyz</p>
              </div>
            </div>
          </Contact>
          <Follow>
            <h1>
              <span />
              {connect}
            </h1>
            <div>
              {socials.map(social => (
                <p>
                  {social.name}
                  <span>{social.link}</span>
                </p>
              ))}
            </div>
          </Follow>
        </Sidebar>
        <Footer />
      </CVContainer>
      <CVNavigate>
        <div onClick={() => history.goBack()}>
          <p className=""> {isVietnamese ? "Trở về" : "Go back"}</p>
          <button>
            <IoIosArrowRoundBack
              size={36}
              style={{ verticalAlign: "bottom" }}
            />
          </button>
        </div>
        <div>
          <p>
            <a href="./CV_TranNguyen_en.pdf" download>
              {isVietnamese ? "Tải CV" : "Download CV"}
            </a>
          </p>
          <button>
            <a href="./CV_TranNguyen_en.pdf" download>
              <IoMdDownload size={31} style={{ verticalAlign: "bottom" }} />
            </a>
          </button>
        </div>
        <div onClick={toggleIsVietnamese}>
          <p> {isVietnamese ? "Ngôn ngữ" : "Language"}</p>
          <button>{isVietnamese ? "VI" : "EN"}</button>
        </div>
      </CVNavigate>
    </CVPage>
  );
};

export default CV;
