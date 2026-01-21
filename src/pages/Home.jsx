import { useState } from "react";
import vesselImage from "../assets/vessel.png";
import "./Home.css";

function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const [hoverDialog, setHoverDialog] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const closeModal = () => setActiveModal(null);

  const handleHover = (type, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoverPos({
      x: rect.right + 15,
      y: rect.top + rect.height / 2
    });
    setHoverDialog(type);
  };

  return (
    <div className="home-container">
      <h1 className="title">VESSEL SYSTEM</h1>

      <div className="image-wrapper">
        <img src={vesselImage} alt="Vessel System" className="vessel-image" />

        {/* Click Areas */}
        <div className="click-area it" onClick={() => setActiveModal("it")}>
          <span></span>
        </div>

        <div className="click-area iot" onClick={() => setActiveModal("iot")}>
          <span></span>
        </div>

        <div className="click-area ot" onClick={() => setActiveModal("ot")}>
          <span></span>
        </div>
      </div>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>✕</button>

            {/* IT Modal */}
            {activeModal === "it" && (
              <>
                <h2>IT Systems</h2>

                <div
                  className="card"
                  onClick={() => window.open("https://172.16.31.158/ui/#/host/vms/14", "_blank")}
                  onMouseEnter={(e) => handleHover("email", e)}
                  onMouseLeave={() => setHoverDialog(null)}
                >
                  <strong>Email PC</strong>
                  <p>Handles vessel communications and email services.</p>
                </div>

                <div
                  className="card"
                  onClick={() => window.open("https://172.16.31.158/ui/#/host/vms/13", "_blank")}
                  onMouseEnter={(e) => handleHover("captain", e)}
                  onMouseLeave={() => setHoverDialog(null)}
                >
                  <strong>Captain PC</strong>
                  <p>Bridge workstation for planning and reporting.</p>
                </div>

                <div
                  className="card"
                  onClick={() => window.open("https://172.16.31.158/ui/#/host/vms/11", "_blank")}
                  onMouseEnter={(e) => handleHover("office", e)}
                  onMouseLeave={() => setHoverDialog(null)}
                >
                  <strong>Office PC</strong>
                  <p>Administrative operations and documentation.</p>
                </div>
              </>
            )}

            {/* OT Modal */}
            {activeModal === "ot" && (
              <>
                <h2>OT Systems</h2>

                <div
                  className="card"
                  onClick={() => window.open("https://172.16.31.158/ui/#/host/vms/20", "_blank")}
                  onMouseEnter={(e) => handleHover("hvac", e)}
                  onMouseLeave={() => setHoverDialog(null)}
                >
                  <strong>HVAC</strong>
                  <p>Heating and ventilation control.</p>
                </div>

                <div
                  className="card"
                  onClick={() => window.open("https://172.16.31.158/ui/#/host/vms/14", "_blank")}
                  onMouseEnter={(e) => handleHover("generator", e)}
                  onMouseLeave={() => setHoverDialog(null)}
                >
                  <strong>Diesel Generator</strong>
                  <p>Electrical power generation.</p>
                </div>

                <div
                  className="card"
                  onClick={() => window.open("https://172.16.31.158/ui/#/host/vms/28", "_blank")}
                  onMouseEnter={(e) => handleHover("propulsion", e)}
                  onMouseLeave={() => setHoverDialog(null)}
                >
                  <strong>Propulsion</strong>
                  <p>Controls ship movement.</p>
                </div>

                <div
                  className="card"
                  onClick={() => window.open("https://172.16.31.158/ui/#/host/vms/16", "_blank")}
                  onMouseEnter={(e) => handleHover("navigation", e)}
                  onMouseLeave={() => setHoverDialog(null)}
                >
                  <strong>Navigation</strong>
                  <p>Route and heading management.</p>
                </div>

                <div
                  className="card"
                  onClick={() => window.open("https://172.16.31.158/ui/#/host/vms/29", "_blank")}
                  onMouseEnter={(e) => handleHover("gps", e)}
                  onMouseLeave={() => setHoverDialog(null)}
                >
                  <strong>GPS</strong>
                  <p>Position and timing system.</p>
                </div>
              </>
            )}

            {/* IoT Modal */}
            {activeModal === "iot" && (
              <>
                <h2>IoT Systems</h2>

                <div
                  className="card"
                   onClick={() => window.open("https://172.16.31.158/ui/#/host/vms/18", "_blank")}

                  onMouseEnter={(e) => handleHover("cctv", e)}
                  onMouseLeave={() => setHoverDialog(null)}
                >
                  <strong>CCTV Monitoring</strong>
                  <p>Video surveillance across vessel.</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Hover Dialog Overlay */}
      {hoverDialog && (
        <div className="hover-modal-overlay">
          <div
            className="hover-modal-box"
            style={{
              left: `${hoverPos.x}px`,
              top: `${hoverPos.y}px`
            }}
          >
            {hoverDialog === "email" && (
              <>
               
               <p>Main external connectivity point.</p>
<p>Used for ship–shore communication.</p>
<p>High risk of phishing and malware.</p>
<p>Often connected to shore networks.</p>
<p>Requires strict security controls.</p>

              </>
            )}

            {hoverDialog === "captain" && (
              <>
               
                <p>Used for voyage planning and reporting.</p>
<p>Stores sensitive operational data.</p>
<p>Supports compliance documentation.</p>
<p>High impact if compromised.</p>
<p>Needs strong authentication and logging.</p>

              </>
            )}

            {hoverDialog === "office" && (
              <>
               
                <p>Handles administrative operations.</p>
<p>Manages crew and cargo records.</p>
<p>Frequently uses external files/USB.</p>
<p>Common ransomware target.</p>
<p>Must be isolated from OT systems.</p>

              </>
            )}

            {hoverDialog === "hvac" && (
              <>
              
               <p>Controls heating and ventilation onboard.</p>
<p>Maintains environmental conditions.</p>
<p>Often PLC/SCADA controlled.</p>
<p>Cyber compromise affects habitability.</p>
<p>Requires OT network protection.</p>

              </>
            )}

            {hoverDialog === "generator" && (
              <>
             
                <p>Generates electrical power for the vessel.</p>
<p>Supports all critical systems.</p>
<p>Digitally monitored and controlled.</p>
<p>Attack may cause power loss.</p>
<p>High safety impact system.</p>

              </>
            )}

            {hoverDialog === "propulsion" && (
              <>
                
                <p>Controls engines and ship movement.</p>
<p>Directly affects maneuverability.</p>
<p>Uses control and automation systems.</p>
<p>Cyber attack risks loss of control.</p>
<p>Safety-critical OT asset.</p>

              </>
            )}

            {hoverDialog === "navigation" && (
              <>
               
                <p>Manages route and heading.</p>
<p>Integrates radar, ECDIS, and sensors.</p>
<p>Supports collision avoidance.</p>
<p>Data integrity is essential.</p>
<p>Target for spoofing and tampering.</p>

              </>
            )}

            {hoverDialog === "gps" && (
              <>
               
               <p>Provides position and timing data.</p>
<p>Core input to navigation systems.</p>
<p>Vulnerable to spoofing and jamming.</p>
<p>False data misleads vessel location.</p>
<p>Needs signal and system monitoring.</p>

              </>
            )}

            {hoverDialog === "cctv" && (
              <>
               
                <p>IP-based cameras monitor critical ship areas.</p>

<p>Enhances safety and security.</p>

<p>Uses ship network / satellite links.</p>

<p>Risks: hacking, data leakage, network entry.</p>

<p>Secure with segregation and strong access control.</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
