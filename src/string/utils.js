export function distance(x1, y1, x2, y2) {
  const x = x2 - x1;
  const y = y2 - y1;
  return Math.sqrt(x * x + y * y);
}

/**
 * 두 점 ((x1, y1) 및 (x2, y2))으로 정의된 선분이 반지름 r인 원 (cx, cy)와 충돌하는지 여부를 판단합니다.
 * 괄호 안의 계산은 원의 중심을 선분에 투영한 값을 찾습니다. 여기에는 다음이 포함됩니다.
 * 벡터 (cx, cy)와 (x1, y1), 그리고 벡터 (x2, y2)와 (x1, y1)의 내적을 통해 중심이 선에 대한 정렬을 파악합니다.
 * Math.pow(lineLength, 2)로 나누어 선분 길이를 기준으로 결과를 정규화합니다.
 * point는 선분에서 원의 중심에 가장 가까운 위치를 나타내는 매개 변수 좌표(0과 1 사이의 값)입니다.
 */
export function lineCircle(x1, y1, x2, y2, cx, cy, r) {
  const lineLength = distance(x1, y1, x2, y2);
  // 투영(proj)벡터: https://bbungprogram.tistory.com/15

  const point =
    ((cx - x1) * (x2 - x1) + (cy - y1) * (y2 - y1)) / Math.pow(lineLength, 2);
  // px와 py는 매개 변수 좌표 point를 사용하여 선분에서 가장 가까운 위치 ((px, py))의 실제 좌표를 계산합니다.
  const px = x1 + point * (x2 - x1);
  const py = y1 + point * (y2 - y1);

  if (distance(px, py, cx, cy) < r) {
    return true;
  } else {
    return false;
  }
}
