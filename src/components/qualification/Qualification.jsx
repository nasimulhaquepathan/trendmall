import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qulification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button button-flex qualification_active"
                : "qualification_button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap  qualification_icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_button button-flex qualification_active"
                : "qualification_button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>
      </div>

      <div className="qualification_sections">
        <div
          className={
            toggleState === 1
              ? "qualification_content qualification_content-active"
              : "qualification_content "
          }
        >
          <div className="qualification_data">
            <div className="web-design1">
              <h3 className="qulification_title">
                Secondary School Certificate
              </h3>
              <span className="qualification_subtitle">DS - Madrasah</span>
              <div className="qualification_calender">
                <i className="uil uil-calender-alt"></i> 2006 - 2016
              </div>
            </div>

            <div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line"></span>
            </div>
          </div>
          <div className="qualification_data">
            <div></div>
            <div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line"></span>
            </div>
            <div>
              <h3 className="qulification_title">
                Higher Secondary School Certificate
              </h3>
              <span className="qualification_subtitle">IIC - College</span>
              <div className="qualification_calender">
                <i className="uil uil-calender-alt"></i> 2017 - 2021
              </div>
            </div>
          </div>
          <div className="qualification_data">
            <div className="art-derector">
              <h3 className="qulification_title">National University</h3>
              <span className="qualification_subtitle">graduation</span>
              <div className="qualification_calender">
                <i className="uil uil-calender-alt"></i> 2021 -present
              </div>
            </div>
            <div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line"></span>
            </div>
          </div>
          <div className="qualification_data">
            <div></div>
            <div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line"></span>
            </div>
            <div>
              <h3 className="qulification_title">BTEB - Institute</h3>
              <span className="qualification_subtitle">Netrokona</span>
              <div className="qualification_calender">
                <i className="uil uil-calender-alt"></i> 2021 - present
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            toggleState === 2
              ? "qualification_content qualification_content-active"
              : "qualification_content "
          }
        >
          <div className="qualification_data">
            <div className="web-design">
              <h3 className="qulification_title">Digital Content</h3>
              <span className="qualification_subtitle">Blogger</span>
              <div className="qualification_calender">
                <i className="uil uil-calender-alt"></i> 2020 - 2021
              </div>
            </div>
            <div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line"></span>
            </div>
          </div>
          <div className="qualification_data">
            <div></div>
            <div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line"></span>
            </div>
            <div>
              <h3 className="qulification_title">UI/UX Design</h3>
              <span className="qualification_subtitle">Advance it center</span>
              <div className="qualification_calender">
                <i className="uil uil-calender-alt"></i> 2021 - 2022
              </div>
            </div>
          </div>
          <div className="qualification_data">
            <div className="art-derector">
              <h3 className="qulification_title">Frontend developer</h3>
              <span className="qualification_subtitle">BTEB - Institute</span>
              <div className="qualification_calender">
                <i className="uil uil-calender-alt"></i> 2021 - present
              </div>
            </div>
            <div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line"></span>
            </div>
          </div>
          <div className="qualification_data">
            <div></div>
            <div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line"></span>
            </div>
            <div>
              <h3 className="qulification_title">Backend developer</h3>
              <span className="qualification_subtitle">BTEB - Institute</span>
              <div className="qualification_calender">
                <i className="uil uil-calender-alt"></i> 2022 - present
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
