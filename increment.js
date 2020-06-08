function increment(type, num) {
  if (type == 'x' && clickrate < 15) {
    clickrate++;
    user.ip.x = user.ip.x.plus(getincxx());
    user.ip.sac = user.ip.sac.plus(getincxx());
    user.ip.pp = user.ip.pp.plus(getincxx());
    user.ip.total = user.ip.total.plus(getincxx());
    updateip();
    updatescaleinc();
    updatesacip();
    unlockip();
    return;
  }
  if (type == 'p' && user.ip.x.gte(getincp(num, "cost"))) {
    user.ip.x = user.ip.x.minus(getincp(num, "cost"));
    user.inc.p[num]++;
    updateip();
    updateincx();
    updateincp();
    return;
  }
  if (type == 'm' && user.ip.x.gte(getincm(num, "cost"))) {
    user.ip.x = user.ip.x.minus(getincm(num, "cost"));
    user.inc.m[num]++;
    updateip();
    updateincx();
    updateincm();
    return;
  }
  if (type == 'e' && user.ip.x.gte(getince(num, "cost"))) {
    user.ip.x = user.ip.x.minus(getince(num, "cost"));
    user.inc.e[num]++;
    updateip();
    updateincx();
    updateince();
    return;
  }
}
