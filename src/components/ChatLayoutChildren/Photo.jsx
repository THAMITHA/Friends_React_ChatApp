//function to handle photo
export default function Photo() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#009688",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        width="300px"
        src="https://media4.giphy.com/media/VlGEcs2PALAfkdV341/giphy.gif?cid=ecf05e47n1c88s4x6pp1t00vj06fuk8t4tj6p8v04s6djlg5&rid=giphy.gif&ct=g"
        alt="friends"
      ></img>

      <h1 className="display-5" style={{ color: "white" }}>
        Chat With Eachother
      </h1>
      <h1 className="display-5" style={{ color: "white" }}>
        Using ReactChat
      </h1>
    </div>
  );
}
