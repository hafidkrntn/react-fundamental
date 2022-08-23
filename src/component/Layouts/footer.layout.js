import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "@mui/material";
import React from "react";
import "/src/style/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link href="mailto:hafidkrntn@gmail.com">
        <Email />
        </Link>
        <Link href="https://github.com/hakun-apollo">
        <GitHub />
        </Link>
        <Link href="https://www.linkedin.com/in/hafid-kurnianton-123958219/">
        <LinkedIn />
        </Link>
        <Link href="https://www.instagram.com/hakunnnn/">
        <Instagram />
        </Link>
      </div>
      <p> &copy; 2022 Hafid Kurnianton</p>
    </div>
  );
}

export default Footer;