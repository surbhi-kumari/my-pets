import {getAgeInMonths} from "../util";
const PetCard = ({name, bornAt, avatar}) => {
  const ageInMonths = getAgeInMonths(bornAt);
  return (
      <div className="pet-card">
        <div>
          <img src={avatar} className="avatar"/>
          <div>
            <div>{name}</div>
            <div>Age: {ageInMonths} {`${ageInMonths == 1 ? "month" : "months"}`}</div>
          </div>
        </div>
      </div>
  );
};

export default PetCard;
