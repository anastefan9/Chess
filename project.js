document.body.onload = createBoardGame;
var lastCellClicked;
var lastI;
var lastJ;
var nrClick = 0;

function createBoardGame() {
    createTable();
    createTableWhitePiecesRemoved();
    createTableBlackPiecesRemoved();
}

function createTable() {
    var body = document.getElementsByTagName("body")[0];
    var tableBody = document.createElement("tbody");
    var table = document.createElement("table");
    table.setAttribute("class", "tableClass");
    table.setAttribute("id", "tableId");

    for (var i = 1; i < 9; ++i) {
        var row = document.createElement("tr");
        for (var j = 1; j < 9; ++j) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode("");
            cell.setAttribute("id", "C" + i + j);
            cell.setAttribute("class", "cellClass");
            cell.onclick = function() { cellOnClick(this.id) };
            cellStyleTable(cell, i, j);
            cellImagesObjects(cell, i, j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    body.appendChild(table);
    table.setAttribute("border", "1");
    body.appendChild(document.createElement("br"));
}

function cellStyleTable(cell, i, j) {
    if (i % 2 != 0) {
        if (j % 2 != 0) {
            cell.style.backgroundColor = "chocolate";
        } else {
            cell.style.backgroundColor = "moccasin";
        }
    } else {
        if (j % 2 == 0) {
            cell.style.backgroundColor = "chocolate";
        } else {
            cell.style.backgroundColor = "moccasin";
        }
    }
}

function cellImagesObjects(cell, i, j) {
    if (i == 1 && (j == 1 || j == 8)) {
        createAndPlaceBlackRock(cell);
    }
    if (i == 8 && (j == 1 || j == 8)) {
        createAndPlaceWhiteRock(cell);
    }
    if (i == 7) {
        createAndPlaceWhitePawn(cell);
    }
    if (i == 2) {
        createAndPlaceBlackPawn(cell);
    }
    if (i == 8 && (j == 2 || j == 7)) {
        createAndPlaceWhiteHorse(cell);
    }
    if (i == 1 && (j == 2 || j == 7)) {
        createAndPlaceBlackHorse(cell);
    }
    if (i == 8 && (j == 3 || j == 6)) {
        createAndPlaceWhiteBishop(cell);
    }
    if (i == 1 && (j == 3 || j == 6)) {
        createAndPlaceBlackBishop(cell);
    }
    if (i == 8 && j == 4) {
        createAndPlaceWhiteQueen(cell);
    }
    if (i == 1 && j == 4) {
        createAndPlaceBlackQueen(cell);
    }
    if (i == 1 && j == 5) {
        createAndPlaceBlackKing(cell);
    }
    if (i == 8 && j == 5) {
        createAndPlaceWhiteKing(cell);
    }
}

function createTableWhitePiecesRemoved() {
    var body = document.getElementsByTagName("body")[0];
    var tableBody = document.createElement("tbody");
    var table = document.createElement("table");
    table.setAttribute("class", "tableWhiteRemovedClass");
    table.setAttribute("id", "tableWhiteRemovedId");

    for (var i = 1; i < 3; ++i) {
        var row = document.createElement("tr");
        for (var j = 1; j < 9; ++j) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode("");
            cell.setAttribute("id", "CWR" + i + j);
            cell.setAttribute("class", "cellWRClass");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    body.appendChild(table);
    table.setAttribute("border", "1");
    body.appendChild(document.createElement("br"));
}

function createTableBlackPiecesRemoved() {
    var body = document.getElementsByTagName("body")[0];
    var tableBody = document.createElement("tbody");
    var table = document.createElement("table");
    table.setAttribute("class", "tableBlackRemovedClass");
    table.setAttribute("id", "tableBlackRemovedId");

    for (var i = 1; i < 3; ++i) {
        var row = document.createElement("tr");
        for (var j = 1; j < 9; ++j) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode("");
            cell.setAttribute("id", "CBR" + i + j);
            cell.setAttribute("class", "cellBRClass");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    body.appendChild(table);
    table.setAttribute("border", "1");
    body.appendChild(document.createElement("br"));
}

function createAndPlaceBlackRock(cell) {
    var blackRock = document.createElement("img");
    blackRock.src = "blackRock.png";
    blackRock.width = 50;
    blackRock.height = 50;
    cell.appendChild(blackRock);
}

function createAndPlaceWhiteRock(cell) {
    var whiteRock = document.createElement("img");
    whiteRock.src = "whiteRock.png";
    whiteRock.width = 50;
    whiteRock.height = 50;
    cell.appendChild(whiteRock);
}

function createAndPlaceWhitePawn(cell) {
    var whitePawn = document.createElement("img");
    whitePawn.src = "whitePawn.png";
    whitePawn.width = 40;
    whitePawn.height = 50;
    cell.appendChild(whitePawn);
}

function createAndPlaceBlackPawn(cell) {
    var blackPawn = document.createElement("img");
    blackPawn.src = "blackPawn.png";
    blackPawn.width = 35;
    blackPawn.height = 50;
    cell.appendChild(blackPawn);
}

function createAndPlaceWhiteHorse(cell) {
    var whiteHorse = document.createElement("img");
    whiteHorse.src = "whiteHorse.png";
    whiteHorse.width = 48;
    whiteHorse.height = 50;
    cell.appendChild(whiteHorse);
}

function createAndPlaceBlackHorse(cell) {
    var blackHorse = document.createElement("img");
    blackHorse.src = "blackHorse.png";
    blackHorse.width = 50;
    blackHorse.height = 50;
    cell.appendChild(blackHorse);
}

function createAndPlaceWhiteBishop(cell) {
    var whiteBishop = document.createElement("img");
    whiteBishop.src = "whiteBishop.png";
    whiteBishop.width = 50;
    whiteBishop.height = 50;
    cell.appendChild(whiteBishop);
}

function createAndPlaceBlackBishop(cell) {
    var blackBishop = document.createElement("img");
    blackBishop.src = "blackBishop.png";
    blackBishop.width = 53;
    blackBishop.height = 50;
    cell.appendChild(blackBishop);
}

function createAndPlaceWhiteQueen(cell) {
    var whiteQueen = document.createElement("img");
    whiteQueen.src = "whiteQueen.png";
    whiteQueen.width = 50;
    whiteQueen.height = 50;
    cell.appendChild(whiteQueen);
}

function createAndPlaceBlackQueen(cell) {
    var blackQueen = document.createElement("img");
    blackQueen.src = "blackQueen.png";
    blackQueen.width = 50;
    blackQueen.height = 50;
    cell.appendChild(blackQueen);
}

function createAndPlaceBlackKing(cell) {
    var blackKing = document.createElement("img");
    blackKing.src = "blackKing.png";
    blackKing.width = 50;
    blackKing.height = 50;
    cell.appendChild(blackKing);
}

function createAndPlaceWhiteKing(cell) {
    var whiteKing = document.createElement("img");
    whiteKing.src = "whiteKing.png";
    whiteKing.width = 50;
    whiteKing.height = 50;
    cell.appendChild(whiteKing);
}

function createAndPlaceCircle(cell) {
    var circle = document.createElement("img");
    circle.src = "circle.png";
    circle.width = 25;
    circle.height = 25;
    cell.appendChild(circle);
    circle.setAttribute("class", "circleClass");
}

function cellOnClick(puffCellId) {
    if (nrClick < 2) {
        ++nrClick;
    }
    var clickedCell = document.getElementById(puffCellId);
    var i = parseInt(puffCellId.charAt(1));
    var j = parseInt(puffCellId.charAt(2));
    var circle = 0;

    if (clickedCell.innerHTML.search("circle") >= 0) {
        circle = 1;
    }

    if (nrClick > 1) {
        if (clickedCell.innerHTML.length > 65) {
            var endImageName = clickedCell.innerHTML.indexOf('.'); // INOVATION
            var imageName = clickedCell.innerHTML.slice(10, endImageName);
            placeRemovedImage(imageName);
            clickedCell.innerHTML = ""; 
        } 
        deleteLastPieceCircles();
    }

    if (clickedCell.innerHTML.slice(10, 19) == "whitePawn") {
        whitePawnOnClick(i, j);
    } else if (clickedCell.innerHTML.slice(10, 19) == "blackPawn") {
        blackPawnOnClick(i, j);
    } else if (clickedCell.innerHTML.slice(10, 19) == "whiteRock") {
        var colorTeam = "white";
        RockOnClick(i, j, colorTeam);
    } else if (clickedCell.innerHTML.slice(10, 19) == "blackRock") {
        var colorTeam = "black";
        RockOnClick(i, j, colorTeam);
    } else if (clickedCell.innerHTML.slice(10, 20) == "whiteHorse") {
        var colorTeam = "white";
        horseOnClick(i, j, colorTeam); // INOVATION
    } else if (clickedCell.innerHTML.slice(10, 20) == "blackHorse") {
        var colorTeam = "black";
        horseOnClick(i, j, colorTeam);
    } else if (clickedCell.innerHTML.slice(10, 21) == "whiteBishop") {
        var colorTeam = "white";
        bishopOnClick(i, j, colorTeam);
    } else if (clickedCell.innerHTML.slice(10, 21) == "blackBishop") {
        var colorTeam = "black";
        bishopOnClick(i, j, colorTeam);
    } else if (clickedCell.innerHTML.slice(10, 20) == "whiteQueen") {
        var colorTeam = "white";
        queenOnClick(i, j, colorTeam);
    } else if (clickedCell.innerHTML.slice(10, 20) == "blackQueen") {
        var colorTeam = "black";
        queenOnClick(i, j, colorTeam);
    } else if (clickedCell.innerHTML.slice(10, 19) == "whiteKing") {
        var colorTeam = "white";
        kingOnClick(i, j, colorTeam);
    } else if (clickedCell.innerHTML.slice(10, 19) == "blackKing") {
        var colorTeam = "black";
        kingOnClick(i, j, colorTeam);
    }

    if (circle == 1) {
        if (lastCellClicked.innerHTML.slice(10, 19) == "whitePawn") {
            createAndPlaceWhitePawn(clickedCell);
        } else if (lastCellClicked.innerHTML.slice(10, 19) == "blackPawn") {
            createAndPlaceBlackPawn(clickedCell);
        } else if (lastCellClicked.innerHTML.slice(10, 19) == "whiteRock") {
            createAndPlaceWhiteRock(clickedCell);
        } else if (lastCellClicked.innerHTML.slice(10, 19) == "blackRock") {
            createAndPlaceBlackRock(clickedCell);
        } else if (lastCellClicked.innerHTML.slice(10, 20) == "whiteHorse") {
            createAndPlaceWhiteHorse(clickedCell);
        } else if (lastCellClicked.innerHTML.slice(10, 20) == "blackHorse") {
            createAndPlaceBlackHorse(clickedCell);
        } else if (lastCellClicked.innerHTML.slice(10, 21) == "whiteBishop") {
            createAndPlaceWhiteBishop(clickedCell);
        } else if (lastCellClicked.innerHTML.slice(10, 21) == "blackBishop") {
            createAndPlaceBlackBishop(clickedCell);
        } else if (lastCellClicked.innerHTML.slice(10, 20) == "whiteQueen") {
            createAndPlaceWhiteQueen(clickedCell);
        } else if (lastCellClicked.innerHTML.slice(10, 20) == "blackQueen") {
            createAndPlaceBlackQueen(clickedCell);
        } else if (lastCellClicked.innerHTML.slice(10, 19) == "whiteKing") {
            createAndPlaceWhiteKing(clickedCell);
        } else if (lastCellClicked.innerHTML.slice(10, 19) == "blackKing") {
            createAndPlaceBlackKing(clickedCell);
        }
        deleteLastPiece(lastCellClicked);
    }

    lastCellClicked = clickedCell;
    lastI = i;
    lastJ = j;
}

function deleteLastPieceCircles() { //INOVATION
    const circles = document.querySelectorAll('.circleClass');

    circles.forEach( circle => {
        circle.remove();
    });
}

function deleteLastPiece(cell) {
    cell.innerHTML = "";
}

///////// REMOVED IMAGE

function placeRemovedImage(imageName) {
    if (imageName == "blackPawn") {
        for (var j = 1; j < 9; ++j) {
            var cell = document.getElementById("CBR" + 2 + j);
            if (cell.innerHTML == "") {
                createAndPlaceBlackPawn(cell);
                break;
            }
        }

    } else if (imageName == "blackRock") {
        var cell1 = document.getElementById("CBR" + 1 + 1);
        var cell2 = document.getElementById("CBR" + 1 + 8);
        if (cell1.innerHTML == "") {
            createAndPlaceBlackRock(cell1);
        } else {
            createAndPlaceBlackRock(cell2);
        }

    } else if (imageName == "blackHorse") {
        var cell1 = document.getElementById("CBR" + 1 + 2);
        var cell2 = document.getElementById("CBR" + 1 + 7);
        if (cell1.innerHTML == "") {
            createAndPlaceBlackHorse(cell1);
        } else {
            createAndPlaceBlackHorse(cell2);
        }
    } else if (imageName == "blackBishop") {
        var cell1 = document.getElementById("CBR" + 1 + 3);
        var cell2 = document.getElementById("CBR" + 1 + 6);
        if (cell1.innerHTML == "") {
            createAndPlaceBlackBishop(cell1);
        } else {
            createAndPlaceBlackBishop(cell2);
        }
    } else if (imageName == "blackQueen") {
        var cell = document.getElementById("CBR" + 1 + 4);
        createAndPlaceBlackQueen(cell);

    } else if (imageName == "blackKing") {
        var cell = document.getElementById("CBR" + 1 + 5);
        createAndPlaceBlackKing(cell);

    } else if (imageName == "whitePawn") {
        for (var j = 1; j < 9; ++j) {
            var cell = document.getElementById("CWR" + 2 + j);
            if (cell.innerHTML == "") {
                createAndPlaceWhitePawn(cell);
                break;
            }
        }
    } else if (imageName == "whiteRock") {
        var cell1 = document.getElementById("CWR" + 1 + 1);
        var cell2 = document.getElementById("CWR" + 1 + 8);
        if (cell1.innerHTML == "") {
            createAndPlaceWhiteRock(cell1);
        } else {
            createAndPlaceWhiteRock(cell2);
        }
    } else if (imageName == "whiteHorse") {
        var cell1 = document.getElementById("CWR" + 1 + 2);
        var cell2 = document.getElementById("CWR" + 1 + 7);
        if (cell1.innerHTML == "") {
            createAndPlaceWhiteHorse(cell1);
        } else {
            createAndPlaceWhiteHorse(cell2);
        }
    } else if (imageName == "whiteBishop") {
        var cell1 = document.getElementById("CWR" + 1 + 3);
        var cell2 = document.getElementById("CWR" + 1 + 6);
        if (cell1.innerHTML == "") {
            createAndPlaceWhiteBishop(cell1);
        } else {
            createAndPlaceWhiteBishop(cell2);
        }

    } else if (imageName == "whiteQueen") {
        var cell = document.getElementById("CWR" + 1 + 4);
        createAndPlaceWhiteQueen(cell);

    } else if (imageName == "whiteKing") {
        var cell = document.getElementById("CWR" + 1 + 5);
        createAndPlaceWhiteKing(cell);
    }
}

///////////// WHITE PAWN

function whitePawnOnClick(i, j) {
    if (i > 0 && j > 0 && j < 9) {
        var cell1 = document.getElementById("C" + (i - 1) + j);
        if (j > 1) {
            var cell3 = document.getElementById("C" + (i - 1) + (j - 1));
            if (cell3.innerHTML != "") {
                var colorC3 = cell3.innerHTML.slice(10, 15);
            }
        }
        if (j < 8) {
            var cell4 = document.getElementById("C" + (i - 1) + (j + 1));
            if (cell4.innerHTML != "") {
                var colorC4 = cell4.innerHTML.slice(10, 15);
            }
        }
        if (i == 7) {
            var cell2 = document.getElementById("C" + (i - 2) + j);
            if (cell1.innerHTML == "") {
                createAndPlaceCircle(cell1);
            }
            if (cell2.innerHTML == "") {
                createAndPlaceCircle(cell2);
            }
            if (cell3.innerHTML != "" && colorC3 == "black") {
                createAndPlaceCircle(cell3);
            }
            if (cell4.innerHTML != "" && colorC4 == "black") {
                createAndPlaceCircle(cell4);
            }
        } else if (cell1.innerHTML == "") {
            createAndPlaceCircle(cell1);
            if (cell3.innerHTML != "" && colorC3 == "black") {
                createAndPlaceCircle(cell3);
            }
            if (cell4.innerHTML != "" && colorC4 == "black") {
                createAndPlaceCircle(cell4);
            }
        } else  {
            if (j > 1 && cell3.innerHTML != "" && colorC3 == "black") {
                createAndPlaceCircle(cell3);
            }
            if (cell4.innerHTML != "" && colorC4 == "black") {
                createAndPlaceCircle(cell4);
            }
        }
    }
}

/////////////// BLACK PAWN

function blackPawnOnClick(i, j) {
    if (i > 0 && i < 9 && j < 9) {
        var c1 = document.getElementById("C" + (i + 1) + j);
        if (j > 1) {
            var c3 = document.getElementById("C" + (i + 1) + (j - 1));
            if (c3.innerHTML != "") {
                var colorC3 = c3.innerHTML.slice(10, 15);
            }
        }
        if (j < 8) {
            var c4 = document.getElementById("C" + (i + 1) + (j + 1));
            if (c4.innerHTML != "") {
                var colorC4 = c4.innerHTML.slice(10, 15);
            }
        }
        if (i == 2) {
            var c2 = document.getElementById("C" + (i + 2) + j);
            if (c2.innerHTML == "") {
                createAndPlaceCircle(c2);
            }
            if (c1.innerHTML == "") {
                createAndPlaceCircle(c1);
            }
            if (c3.innerHTML != "" && colorC3 == "white") {
                createAndPlaceCircle(c3);
            } 
            if (c4.innerHTML != "" && colorC4 == "white") {
                createAndPlaceCircle(c4);
            }
        } else if (c1.innerHTML == "") {
            createAndPlaceCircle(c1);
            if (c3.innerHTML != "" && colorC3 == "white") {
                createAndPlaceCircle(c3);
            } 
            if (c4.innerHTML != "" && colorC4 == "white") {
                createAndPlaceCircle(c4);
            }
        } else {
            if (j > 1 && c3.innerHTML != "" && colorC3 == "white") {
                createAndPlaceCircle(c3);
            } 
            if (c4.innerHTML != "" && colorC4 == "white") {
                createAndPlaceCircle(c4);
            }
        }
    }
}

//////////////  ROCK

function RockOnClick(i, j, colorTeam) {
    if ((i - 1) > 0) {
        var count = 1;
        var top = document.getElementById("C" + (i - count) + j);
        var countPieces = 0;
        while ((i - count) > 0 && top.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (top.innerHTML.length > 47) {
                ++countPieces;
            }
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(top);
            ++count;
            if ((i - count) > 0) {
                top = document.getElementById("C" + (i - count) + j);
            } else {
                break;
            }
        }
    }
    if ((i + 1) < 9) {
        var count = 1;
        var bottom = document.getElementById("C" + (i + count) + j);
        var countPieces = 0;
        while ((i + count) < 9 && bottom.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (bottom.innerHTML.length > 47) {
                ++countPieces
            }
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(bottom);
            ++count;
            if ((i + count) < 9) {
                bottom = document.getElementById("C" + (i + count) + j);
            } else {
                break;
            }
        }
    }
    if ((j + 1) < 9) {
        var count = 1;
        var right = document.getElementById("C" + i + (j + count));
        var countPieces = 0;
        while ((j + 1) < 9 && right.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (right.innerHTML.length > 47) {
                ++countPieces;
            }
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(right);
            ++count;
            if ((j + count) < 9) {
                right = document.getElementById("C" + i + (j + count));
            } else {
                break;
            }
        }
    }
    if ((j - 1) > 0) {
        var count = 1;
        var left = document.getElementById("C" + i + (j - count));
        var countPieces = 0;
        while ((j - 1) > 0 && left.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (left.innerHTML.length > 47) {
                ++countPieces;
            }
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(left);
            ++count;
            if ((j - count) > 0) {
                left = document.getElementById("C" + i + (j - count));
            } else {
                break;
            }
        }
    }
}

///////////// HORSE

function horseOnClick(i, j, colorTeam) {
    if ((i - 2) > 0 && (j + 1) < 9) {
        var topRight = document.getElementById("C" + (i - 2) + (j + 1));
        if (topRight.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(topRight);
        }
    }
    if ((i - 1) > 0 && (j + 2) < 9) {
        var rightTop = document.getElementById("C" + (i - 1) + (j + 2));
        if (rightTop.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(rightTop);
        }
    }
    if ((i + 1) < 9 && (j + 2) < 9) {
        var rightBottom = document.getElementById("C" + (i + 1) + (j + 2));
        if (rightBottom.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(rightBottom);
        }
    }
    if ((i + 2) < 9 && (j + 1) < 9) {
        var bottomRight = document.getElementById("C" + (i + 2) + (j + 1));
        if (bottomRight.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(bottomRight);
        }
    }
    if ((i + 2) < 9 && (j - 1) > 0) {
        var bottomLeft = document.getElementById("C" + (i + 2) + (j - 1));
        if (bottomLeft.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(bottomLeft);
        }
    }
    if ((i + 1) < 9 && (j - 2) > 0) {
        var leftBottom = document.getElementById("C" + (i + 1) + (j - 2));
        if (leftBottom.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(leftBottom);
        }
    }
    if ((i - 1) > 0 && (j - 2) > 0) {
        var leftTop = document.getElementById("C" + (i - 1) + (j - 2));
        if (leftTop.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(leftTop);
        }
    }
    if ((i - 2) > 0 && (j - 1) > 0) {
        var topLeft = document.getElementById("C" + (i - 2) + (j - 1));
        if (topLeft.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(topLeft);
        }
    }
}

///////////// BISHOP

function bishopOnClick(i, j, colorTeam) {
    if ((i - 1) > 0 && (j + 1) < 9) {
        var count = 1;
        var topRight = document.getElementById("C" + (i - count) + (j + count));
        var countPieces = 0;
        while ((i - count) > 0 && (j + count) < 9 && topRight.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (topRight.innerHTML.length > 47) {
                ++countPieces;
            } 
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(topRight);
            ++count;
            if ((i - count) > 0 && (j + count) < 9) {
                topRight = document.getElementById("C" + (i - count) + (j + count));
            } else {
                break;
            }
        }
    }
    if ((i + 1) < 9 && (j + 1) < 9) {
        var count = 1;
        var bottomRight = document.getElementById("C" + (i + count) + (j + count));
        var countPieces = 0;
        while ((i + count) < 9 && (j + count) < 9 && bottomRight.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (bottomRight.innerHTML.length > 47) {
                ++countPieces;
            }
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(bottomRight);
            ++count;
            if ((i + count) < 9 && (j + count) < 9) {
                bottomRight = document.getElementById("C" + (i + count) + (j + count));
            } else {
                break;
            }
        }
    }
    if ((i + 1) < 9 && (j - 1) > 0) {
        var count = 1;
        var bottomLeft = document.getElementById("C" + (i + count) + (j - count));
        var countPieces = 0;
        while ((i + count) < 9 && (j - count) > 0 && bottomLeft.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (bottomLeft.innerHTML.length > 47) {
                ++countPieces;
            }
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(bottomLeft);
            ++count;
            if ((i + count) < 9 && (j - count) > 0) {
                bottomLeft = document.getElementById("C" + (i + count) + (j - count));
            } else {
                break;
            }
        }
    }
    if ((i - 1) > 0 && (j - 1) > 0) {
        var count = 1;
        var topLeft = document.getElementById("C" + (i - count) + (j - count));
        var countPieces = 0;
        while ((i - count) > 0 && (j - count) > 0 && topLeft.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (topLeft.innerHTML.length > 47) {
                ++countPieces;
            }
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(topLeft);
            ++count;
            if ((i - count) > 0 && (j - count) > 0) {
                topLeft = document.getElementById("C" + (i - count) + (j - count));
            } else {
                break;
            }
        }
    }
}


////////// QUEEN

function queenOnClick(i, j, colorTeam) {
    if ((i - 1) > 0) {
        var count = 1;
        var top = document.getElementById("C" + (i - count) + j);
        var countPieces = 0;
        while ((i - count) > 0 && top.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (top.innerHTML.length > 47) {
                ++countPieces;
            }
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(top);
            ++count;
            if ((i - count) > 0) {
                top = document.getElementById("C" + (i - count) + j);
            } else {
                break;
            }
        }
    }
    if ((i + 1) < 9) {
        var count = 1;
        var bottom = document.getElementById("C" + (i + count) + j);
        var countPieces = 0;
        while ((i + count) < 9 && bottom.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (bottom.innerHTML.length > 47) {
                ++countPieces
            }
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(bottom);
            ++count;
            if ((i + count) < 9) {
                bottom = document.getElementById("C" + (i + count) + j);
            } else {
                break;
            }
        }
    }
    if ((j + 1) < 9) {
        var count = 1;
        var right = document.getElementById("C" + i + (j + count));
        var countPieces = 0;
        while ((j + 1) < 9 && right.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (right.innerHTML.length > 47) {
                ++countPieces;
            }
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(right);
            ++count;
            if ((j + count) < 9) {
                right = document.getElementById("C" + i + (j + count));
            } else {
                break;
            }
        }
    }
    if ((j - 1) > 0) {
        var count = 1;
        var left = document.getElementById("C" + i + (j - count));
        var countPieces = 0;
        while ((j - 1) > 0 && left.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (left.innerHTML.length > 47) {
                ++countPieces;
            }
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(left);
            ++count;
            if ((j - count) > 0) {
                left = document.getElementById("C" + i + (j - count));
            } else {
                break;
            }
        }
    }
    if ((i - 1) > 0 && (j + 1) < 9) {
        var count = 1;
        var topRight = document.getElementById("C" + (i - count) + (j + count));
        var countPieces = 0;
        while ((i - count) > 0 && (j + count) < 9 && topRight.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (topRight.innerHTML.length > 47) {
                ++countPieces;
            } 
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(topRight);
            ++count;
            if ((i - count) > 0 && (j + count) < 9) {
                topRight = document.getElementById("C" + (i - count) + (j + count));
            } else {
                break;
            }
        }
    }
    if ((i + 1) < 9 && (j + 1) < 9) {
        var count = 1;
        var bottomRight = document.getElementById("C" + (i + count) + (j + count));
        var countPieces = 0;
        while ((i + count) < 9 && (j + count) < 9 && bottomRight.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (bottomRight.innerHTML.length > 47) {
                ++countPieces;
            }
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(bottomRight);
            ++count;
            if ((i + count) < 9 && (j + count) < 9) {
                bottomRight = document.getElementById("C" + (i + count) + (j + count));
            } else {
                break;
            }
        }
    }
    if ((i + 1) < 9 && (j - 1) > 0) {
        var count = 1;
        var bottomLeft = document.getElementById("C" + (i + count) + (j - count));
        var countPieces = 0;
        while ((i + count) < 9 && (j - count) > 0 && bottomLeft.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (bottomLeft.innerHTML.length > 47) {
                ++countPieces;
            }
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(bottomLeft);
            ++count;
            if ((i + count) < 9 && (j - count) > 0) {
                bottomLeft = document.getElementById("C" + (i + count) + (j - count));
            } else {
                break;
            }
        }
    }
    if ((i - 1) > 0 && (j - 1) > 0) {
        var count = 1;
        var topLeft = document.getElementById("C" + (i - count) + (j - count));
        var countPieces = 0;
        while ((i - count) > 0 && (j - count) > 0 && topLeft.innerHTML.slice(10, 15) != colorTeam && countPieces < 2) {
            if (topLeft.innerHTML.length > 47) {
                ++countPieces;
            }
            if (countPieces == 2) {
                break;
            }
            createAndPlaceCircle(topLeft);
            ++count;
            if ((i - count) > 0 && (j - count) > 0) {
                topLeft = document.getElementById("C" + (i - count) + (j - count));
            } else {
                break;
            }
        }
    }
}

////////// KING

function kingOnClick(i, j, colorTeam) {
    if ((i - 1) > 0) {
        var top = document.getElementById("C" + (i - 1) + j);
        if (top.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(top);
        }
    }
    if ((i - 1) > 0 && (j + 1) < 9) {
        var topRight = document.getElementById("C" + (i - 1) + (j + 1));
        if (topRight.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(topRight);
        }
    }
    if ((j + 1) < 9) {
        var right = document.getElementById("C" + i + (j + 1));
        if (right.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(right);
        }
    }
    if ((i + 1) < 9 && (j + 1) < 9) {
        var bottomRight = document.getElementById("C" + (i + 1) + (j + 1));
        if (bottomRight.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(bottomRight);
        }
    }
    if ((i + 1) < 9) {
        var bottom = document.getElementById("C" + (i + 1) + j);
        if (bottom.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(bottom);
        }
    }
    if ((i + 1) < 9 && (j - 1) > 0) {
        var bottomLeft = document.getElementById("C" + (i + 1) + (j - 1));
        if (bottomLeft.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(bottomLeft);
        }
    }
    if ((j - 1) > 0) {
        var left = document.getElementById("C" + i + (j - 1));  
        if (left.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(left);
        }
    }
    if ((i - 1) > 0 && (j - 1) > 0) {
        var topLeft = document.getElementById("C" + (i - 1) + (j - 1));
        if (topLeft.innerHTML.slice(10, 15) != colorTeam) {
            createAndPlaceCircle(topLeft);
        }
    }
}