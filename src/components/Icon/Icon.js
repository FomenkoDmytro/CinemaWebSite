import icons from "../../assets/images/icons.svg";

function Icon({ icon, className = "", w, h }) {
  return (
    <div>
      <svg className={className} width={w} height={h}>
        <use href={`${icons}#${icon}`}></use>
      </svg>
    </div>
  );
}
export default Icon;
