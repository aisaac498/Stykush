import React from 'react';
import '../../styles/teamSection.css';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'James Henry',
      role: 'Founder and CEO',
      imgSrc: "https://unsplash.com/photos/7YVZYZeITc8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fHx8MTcxOTE0NzkyN3ww&force=true&w=1920",
    },
    {
      name: 'Emily Carter',
      role: 'Creative Director',
      imgSrc: "https://unsplash.com/photos/0WTtJ0bhJcw/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE5MjUxMzMwfA&force=true&w=1920",
    },
    {
      name: 'Mykel Smith',
      role: 'Content Writer',
      imgSrc: "https://unsplash.com/photos/dt60oksDTx8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTR8fHBvcnRyYWl0fGVufDB8fHx8MTcxOTI0MTI2NHww&force=true&w=1920",
    },
    {
      name: 'Alex Morgan',
      role: 'Operations Manager',
      imgSrc: "https://unsplash.com/photos/pAtA8xe_iVM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDd8fHBvcnRyYWl0fGVufDB8fHx8MTcxOTI0MTI2NHww&force=true&w=1920",
    },
  ];

  return (
    <div className="team-section">
      <div className="wrapper">
        <div className="title">
          <h4>Meet the Team</h4>
        </div>
        <div className="card_Container">
          {teamMembers.map((member, index) => (
            <div className="card" key={index}>
              <div className="imgBx">
                <img src={member.imgSrc} alt={member.name} />
              </div>
              <div className="content">
                <div className="contentBx">
                  <h3>
                    {member.name} <br />
                    <span>{member.role}</span>
                  </h3>
                </div>
                <ul className="sci">
                  <li style={{ '--i': 1 }}>
                    <div className='anchor'><FaInstagram /></div>
                  </li>
                  <li style={{ '--i': 2 }}>
                    <div className='anchor'><FaGithub /></div>
                  </li>
                  <li style={{ '--i': 3 }}>
                    <div className='anchor'><FaLinkedin /></div>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
