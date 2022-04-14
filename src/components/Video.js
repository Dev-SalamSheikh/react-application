import classes from "../styles/Video.module.css";

export default function Video({ title, id, noq }) {
  return (
    <a href="quiz.html">
      <div className={classes.video}>
        <img
          src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt="{title}"
        />
        <p>{title}</p>
        <div className={classes.qmeta}>
          <p>{noq} Questions</p>
          <p>TOtal Points : {noq * 5}</p>
        </div>
      </div>
    </a>
  );
}
