import styles from "./navbar.module.css"

const NavBar = () => {
  return (
    <div className={styles.app}>
      <div className={styles.navbarMobile}>
        <div className={styles.companyLogoWrapper}>
          <div className={styles.companyLogo}>
            <img className={styles.unionIcon} alt="" src="/union.svg" />
            <img className={styles.totelIcon} alt="" src="/totel.svg" />
          </div>
        </div>
        <div className={styles.button}>
          <img className={styles.menuIcon} alt="" src="/menu.svg" />
        </div>
      </div>
      <nav className={styles.navbarMonitor} id="1">
        <div className={styles.container}>
          <div className={styles.textInputContainer}>
            <a className={styles.companyLogo1} href="http://localhost:3000/">
              <img className={styles.unionIcon} alt="" src="/union1.svg" />
              <img className={styles.totelIcon} alt="" src="/totel1.svg" />
            </a>
            <ul className={styles.textInput} id="nav-fs-ul">
              <button className={styles.button1}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.text}>Room Stays</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
              </button>
              <button className={styles.button2}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.text}>Looking for Partner</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
              </button>
              <button className={styles.button2}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.text}>Company</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="/chevron-down.svg"
                />
              </button>
              <button className={styles.button2}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.text}>Help</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
              </button>
            </ul>
          </div>
          <div className={styles.button5} id="nav-fs-pfp">
            <button className={styles.button6}>
              <img
                className={styles.placeholderIcon8}
                alt=""
                src="/placeholder1.svg"
              />
              <div className={styles.text4}>Manage Listings</div>
              <img
                className={styles.placeholderIcon8}
                alt=""
                src="/placeholder2.svg"
              />
            </button>
            <button className={styles.avatar}>
              <img
                className={styles.statusIcon}
                alt=""
                src="/status-icon.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.headerDropdownList}>
          <div className={styles.horizontalContainer}>
            <div className={styles.navbarDropdownList}>
              <div className={styles.iconPlaceholder}>
                <img className={styles.icon} alt="" src="/icon.svg" />
              </div>
              <div className={styles.container1}>
                <div className={styles.academy}>Academy</div>
                <div className={styles.noMatterWhat}>
                  No matter what kind of home you have to share, you can
                  increase your earnings.
                </div>
                <div className={styles.button7}>
                  <img
                    className={styles.placeholderIcon8}
                    alt=""
                    src="/placeholder3.svg"
                  />
                  <div className={styles.text5}>Button</div>
                  <img className={styles.icon} alt="" src="/arrow-right.svg" />
                </div>
              </div>
            </div>
            <div className={styles.navbarDropdownList}>
              <div className={styles.iconPlaceholder}>
                <img className={styles.icon} alt="" src="/icon1.svg" />
              </div>
              <div className={styles.container1}>
                <div className={styles.academy}>Resources</div>
                <div className={styles.noMatterWhat}>
                  No matter what kind of home you have to share, you can
                  increase your earnings.
                </div>
                <div className={styles.button7}>
                  <img
                    className={styles.placeholderIcon8}
                    alt=""
                    src="/placeholder4.svg"
                  />
                  <div className={styles.text5}>Button</div>
                  <img className={styles.icon} alt="" src="/arrow-right.svg" />
                </div>
              </div>
            </div>
            <div className={styles.navbarDropdownList}>
              <div className={styles.iconPlaceholder}>
                <img className={styles.icon} alt="" src="/icon2.svg" />
              </div>
              <div className={styles.container1}>
                <div className={styles.academy}>Guides</div>
                <div className={styles.noMatterWhat}>
                  No matter what kind of home you have to share, you can
                  increase your earnings.
                </div>
                <div className={styles.button7}>
                  <img
                    className={styles.placeholderIcon8}
                    alt=""
                    src="/placeholder5.svg"
                  />
                  <div className={styles.text5}>Button</div>
                  <img className={styles.icon} alt="" src="/arrow-right1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.navbarDropdownList}>
              <div className={styles.iconPlaceholder}>
                <img className={styles.icon} alt="" src="/icon3.svg" />
              </div>
              <div className={styles.container1}>
                <div className={styles.academy}>Design</div>
                <div className={styles.noMatterWhat}>
                  No matter what kind of home you have to share, you can
                  increase your earnings.
                </div>
                <div className={styles.button7}>
                  <img
                    className={styles.placeholderIcon8}
                    alt=""
                    src="/placeholder5.svg"
                  />
                  <div className={styles.text5}>Button</div>
                  <img className={styles.icon} alt="" src="/arrow-right1.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ctaSection}>
            <div className={styles.button11}>
              <img
                className={styles.placeholderIcon8}
                alt=""
                src="/placeholder6.svg"
              />
              <div className={styles.text5}>Contact Us</div>
              <img
                className={styles.placeholderIcon8}
                alt=""
                src="/placeholder6.svg"
              />
            </div>
            <div className={styles.button11}>
              <img
                className={styles.placeholderIcon8}
                alt=""
                src="/placeholder6.svg"
              />
              <div className={styles.text5}>Info</div>
              <img
                className={styles.placeholderIcon8}
                alt=""
                src="/placeholder6.svg"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};


export default NavBar