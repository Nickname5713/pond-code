var angle, dist, moveangle;


angle = 0;
while (true) {
  dist = scan(angle);
  moveangle = 180 - angle;
  if (dist <= 70) {
    cannon(angle, dist);
    swim(moveangle);
  } else {
    angle += 1;
  }
  if (getX() < -95) {
    stop();
    swim(0);
  } else if (getX() > 95) {
    stop();
    swim(180);
  } else if (getY() < -95) {
    stop();
    swim(90);
  } else if (getY() > 95) {
    stop();
    swim(270);
  }
}
