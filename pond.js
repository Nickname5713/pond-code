var angle, dist, moveangle;


angle = 0;
while (true) {
  dist = scan(angle);
  moveangle = 180 - angle;
  if (dist <= 70) {
    cannon(angle, dist);
    if (getX() < -80) {
      stop();
    } else if (getX() > 80) {
      stop();
    } else if (getY() < -80) {
      stop();
    } else if (getY() > 80) {
      stop();
    } else {
      swim(moveangle);
    }
  } else {
    angle += 1;
  }
}
