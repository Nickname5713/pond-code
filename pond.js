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
  if (getX() < -95 || getX() > 95 || getY() < -95 || getY() > 95) {
    stop();
  }
}


