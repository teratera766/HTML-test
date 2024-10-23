let canvas, g;
let maptip;
let map;
let photo_1, photo_2;
let cra_img;
let cra_x, cra_y;
let map_x, map_y;
let count;

onload = function () {
  canvas = document.getElementById("map_canvas");
  g = canvas.getContext("2d");

  map = [
    [ 0, 0, 0, 0, 0 ],
    [ 0, 3, 3, 3, 0 ],
    [ 0, 3, 3, 3, 0 ],
    [ 0, 0, 1, 0, 0 ],
    [ 0, 3, 3, 3, 0 ],
    [ 0, 3, 3, 3, 0 ],
    [ 0, 0, 0, 0, 2 ]
  ];

  maptip = [];
  for (let i = 0; i < 4; i++)
  {
    maptip[ i ] = new Image();
    maptip[ i ].src = "img/maptip" + i + ".png";
  }

  photo_1 = new Image();
  photo_1.src = "img/photo1.jpg";

  photo_2 = new Image();
  photo_2.src = "img/photo2.jpg";

  cra_img = [];
  for (let i = 0; i < 2; i++)
  {
    cra_img[ i ] = new Image();
    cra_img[ i ].src = "img/me" + i + ".png";
  }
  cra_x = 0;
  cra_y = 0;

  map_y = 0;
  map_x = 0;

  count = 0;

}

setInterval("loop()", 100);

function loop() {
  draw_map();
  draw_shop();
  draw_cra();
}

function draw_map() {
  let yy = 0;
  for (let j = 0; j < 7; j++)
  {
    let xx = 0;
    for (let i = 0; i < 5; i++)
    {
      g.drawImage(
        maptip[ map[ j ][ i ] ], xx, yy, 40, 40
      );
      xx += 40;
    }
    yy += 40;
  }
}

function draw_shop() {

  if (map[ map_y ][ map_x ] == 1)
  {

    g.fillStyle = "rgb(50,100,200)";
    g.fillRect(0, 0, 200, 160);

    g.drawImage(photo_1, 5, 5, 190, 150);

    g.fillStyle = "rgb(0,0,0)";
    g.font = "20px メイリオ";
    g.fillText("あああ", 10, 100);
    g.fillText("ううう", 10, 130);

  } else if (map[ map_y ][ map_x ] == 2)
  {
    g.fillStyle = "rgb(231,87,48)";
    g.fillRect(0, 0, 200, 160);

    g.drawImage(photo_2, 5, 5, 190, 150);

    g.fillStyle = "rgb(255,255,255)";
    g.font = "bold 20px メイリオ";
    g.fillText("かかか", 40, 100);
    g.fillText("ききき", 40, 130);

    g.fillStyle = "rgb(17, 202, 42)";
    g.fillText("かかか", 38, 98);
    g.fillText("ききき", 38, 128);
  }
}

function draw_cra() {
  count++;
  g.drawImage(cra_img[ Math.floor(count / 10) % 2 ], cra_x, cra_y, 40, 40);
}

addEventListener("keydown", keydownfunc);
function keydownfunc(event) {
  let key_code = event.key;

  if (key_code == "ArrowLeft")
  {
    if (map_hantei(map_y, map_x - 1))
    {
      cra_x -= 40, map_x -= 1;
    }
  }
  if (key_code == "ArrowUp")
  {
    if (map_hantei(map_y - 1, map_x))
    {
      cra_y -= 40, map_y -= 1;
    }
  }
  if (key_code == "ArrowRight")
  {
    if (map_hantei(map_y, map_x + 1))
    {
      cra_x += 40, map_x += 1;
    }
  }
  if (key_code == "ArrowDown")
  {
    if (map_hantei(map_y + 1, map_x))
    {
      cra_y += 40, map_y += 1;
    }
  }
}

function btn_left_click() {
  if (map_hantei(map_y, map_x - 1))
  {
    cra_x -= 40, map_x -= 1;
  }
}
function btn_up_click() {
  if (map_hantei(map_y - 1, map_x))
  {
    cra_y -= 40, map_y -= 1;
  }
}
function btn_down_click() {
  if (map_hantei(map_y + 1, map_x))
  {
    cra_y += 40, map_y += 1;
  }
}
function btn_right_click() {
  if (map_hantei(map_y, map_x + 1))
  {
    cra_x += 40, map_x += 1;
  }
}

function map_hantei(yyy, xxx) {
  if (map[ yyy ][ xxx ] < 3)
  {
    return true;
  }
}