enum Direction {
    Up,
    Down,
    Left,
    Right
}


function keyPressed(direction: Direction) {
    console.log(direction);
}

keyPressed(Direction.Up)