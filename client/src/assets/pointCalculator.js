const positions = { g: "G", d: "D", m: "M", f: "F" };

export const individualPoints = (
  minutes,
  position,
  goals,
  cards,
  penalty,
  captain
) => {
  const goal = goals.total;
  const assist = goals.assists;
  const conceded = goals.conceded;
  const saves = goals.saves;
  let sum = 0;
  if (minutes < 60 && minutes > 0) {
    sum += 2;
  } else if (minutes >= 60) {
    sum += 4;
  }

  if (goal) {
    if (position === positions.f) {
      sum += 5 * goal;
    } else if (position === positions.m) {
      sum += 6 * goal;
    } else if (position === positions.d) {
      sum += 8 * goal;
    } else {
      sum += 10 * goal;
    }
    if (goal >= 3) {
      sum += 3;
    }
  }
  if (assist) {
    if (position === positions.f || position === positions.m) {
      sum += 3 * assist;
    } else if (position === positions.d) {
      sum += 4 * assist;
    } else {
      sum += 8 * assist;
    }
  }
  if (cards.yellow === 1) {
    sum -= 1;
  } else if (cards.yellow === 2 || cards.red === 1) {
    sum -= 4;
  }

  if (conceded) {
    sum -= conceded * 1;
  }
  if (saves) {
    sum += saves * 3;
  }

  if (penalty.saved) {
    if (position === positions.g) {
      sum += penalty.saved * 5;
    } else {
      sum += penalty.saved * 10;
    }
  }
  if (penalty.won) {
    sum += 1;
  }
  if (penalty.commited) {
    sum -= 1;
  }
  if (penalty.missed) {
    sum -= 3;
  }
  if (captain) {
    sum *= 2;
  }

  return sum;
};

export const pointsFromTeam = (position, conceded) => {
  let sum = 0;
  if (position === positions.d) {
    if (conceded) {
      sum -= conceded * 2;
    } else {
      sum += 3;
    }
  }
  if (position === positions.g && !conceded) {
    sum += 5;
  }
};
