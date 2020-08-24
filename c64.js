(function() {
    // Static variables
    var CharacterMap = new Image();
    CharacterMap.addEventListener("load", function() {
        $.each(OnLoad, function(index, callback) {
            callback();
        });
    });
    CharacterMap.src = '/c64.png';
    var OnLoad = Array();

    var Characters = {
        '@': Character({ image: CharacterMap, x:  0, y: 0 }),
        'a': Character({ image: CharacterMap, x:  1, y: 0 }),
        'b': Character({ image: CharacterMap, x:  2, y: 0 }),
        'c': Character({ image: CharacterMap, x:  3, y: 0 }),
        'd': Character({ image: CharacterMap, x:  4, y: 0 }),
        'e': Character({ image: CharacterMap, x:  5, y: 0 }),
        'f': Character({ image: CharacterMap, x:  6, y: 0 }),
        'g': Character({ image: CharacterMap, x:  7, y: 0 }),
        'h': Character({ image: CharacterMap, x:  8, y: 0 }),
        'i': Character({ image: CharacterMap, x:  9, y: 0 }),
        'j': Character({ image: CharacterMap, x: 10, y: 0 }),
        'k': Character({ image: CharacterMap, x: 11, y: 0 }),
        'l': Character({ image: CharacterMap, x: 12, y: 0 }),
        'm': Character({ image: CharacterMap, x: 13, y: 0 }),
        'n': Character({ image: CharacterMap, x: 14, y: 0 }),
        'o': Character({ image: CharacterMap, x: 15, y: 0 }),

        'p': Character({ image: CharacterMap, x:  0, y: 1 }),
        'q': Character({ image: CharacterMap, x:  1, y: 1 }),
        'r': Character({ image: CharacterMap, x:  2, y: 1 }),
        's': Character({ image: CharacterMap, x:  3, y: 1 }),
        't': Character({ image: CharacterMap, x:  4, y: 1 }),
        'u': Character({ image: CharacterMap, x:  5, y: 1 }),
        'v': Character({ image: CharacterMap, x:  6, y: 1 }),
        'w': Character({ image: CharacterMap, x:  7, y: 1 }),
        'x': Character({ image: CharacterMap, x:  8, y: 1 }),
        'y': Character({ image: CharacterMap, x:  9, y: 1 }),
        'z': Character({ image: CharacterMap, x: 10, y: 1 }),
        '[': Character({ image: CharacterMap, x: 11, y: 1 }),
        '£': Character({ image: CharacterMap, x: 12, y: 1 }),
        ']': Character({ image: CharacterMap, x: 13, y: 1 }),

        //' ': Character({ image: CharacterMap, x:  0, y: 2 }),
        '!': Character({ image: CharacterMap, x:  1, y: 2 }),
        '"': Character({ image: CharacterMap, x:  2, y: 2 }),
        '#': Character({ image: CharacterMap, x:  3, y: 2 }),
        '$': Character({ image: CharacterMap, x:  4, y: 2 }),
        '%': Character({ image: CharacterMap, x:  5, y: 2 }),
        '&': Character({ image: CharacterMap, x:  6, y: 2 }),
        '`': Character({ image: CharacterMap, x:  7, y: 2 }),
        "'": Character({ image: CharacterMap, x:  7, y: 2 }),
        '(': Character({ image: CharacterMap, x:  8, y: 2 }),
        ')': Character({ image: CharacterMap, x:  9, y: 2 }),
        '*': Character({ image: CharacterMap, x: 10, y: 2 }),
        '+': Character({ image: CharacterMap, x: 11, y: 2 }),
        ',': Character({ image: CharacterMap, x: 12, y: 2 }),
        '-': Character({ image: CharacterMap, x: 13, y: 2 }),
        '.': Character({ image: CharacterMap, x: 14, y: 2 }),
        '/': Character({ image: CharacterMap, x: 15, y: 2 }),

        '0': Character({ image: CharacterMap, x:  0, y: 3 }),
        '1': Character({ image: CharacterMap, x:  1, y: 3 }),
        '2': Character({ image: CharacterMap, x:  2, y: 3 }),
        '3': Character({ image: CharacterMap, x:  3, y: 3 }),
        '4': Character({ image: CharacterMap, x:  4, y: 3 }),
        '5': Character({ image: CharacterMap, x:  5, y: 3 }),
        '6': Character({ image: CharacterMap, x:  6, y: 3 }),
        '7': Character({ image: CharacterMap, x:  7, y: 3 }),
        '8': Character({ image: CharacterMap, x:  8, y: 3 }),
        '9': Character({ image: CharacterMap, x:  9, y: 3 }),
        ':': Character({ image: CharacterMap, x: 10, y: 3 }),
        ';': Character({ image: CharacterMap, x: 11, y: 3 }),
        '<': Character({ image: CharacterMap, x: 12, y: 3 }),
        '=': Character({ image: CharacterMap, x: 13, y: 3 }),
        '>': Character({ image: CharacterMap, x: 14, y: 3 }),
        '?': Character({ image: CharacterMap, x: 15, y: 3 }),

        'A': Character({ image: CharacterMap, x:  1, y: 4 }),
        'B': Character({ image: CharacterMap, x:  2, y: 4 }),
        'C': Character({ image: CharacterMap, x:  3, y: 4 }),
        'D': Character({ image: CharacterMap, x:  4, y: 4 }),
        'E': Character({ image: CharacterMap, x:  5, y: 4 }),
        'F': Character({ image: CharacterMap, x:  6, y: 4 }),
        'G': Character({ image: CharacterMap, x:  7, y: 4 }),
        'H': Character({ image: CharacterMap, x:  8, y: 4 }),
        'I': Character({ image: CharacterMap, x:  9, y: 4 }),
        'J': Character({ image: CharacterMap, x: 10, y: 4 }),
        'K': Character({ image: CharacterMap, x: 11, y: 4 }),
        'L': Character({ image: CharacterMap, x: 12, y: 4 }),
        'M': Character({ image: CharacterMap, x: 13, y: 4 }),
        'N': Character({ image: CharacterMap, x: 14, y: 4 }),
        'O': Character({ image: CharacterMap, x: 15, y: 4 }),

        'P': Character({ image: CharacterMap, x:  0, y: 5 }),
        'Q': Character({ image: CharacterMap, x:  1, y: 5 }),
        'R': Character({ image: CharacterMap, x:  2, y: 5 }),
        'S': Character({ image: CharacterMap, x:  3, y: 5 }),
        'T': Character({ image: CharacterMap, x:  4, y: 5 }),
        'U': Character({ image: CharacterMap, x:  5, y: 5 }),
        'V': Character({ image: CharacterMap, x:  6, y: 5 }),
        'W': Character({ image: CharacterMap, x:  7, y: 5 }),
        'X': Character({ image: CharacterMap, x:  8, y: 5 }),
        'Y': Character({ image: CharacterMap, x:  9, y: 5 }),
        'Z': Character({ image: CharacterMap, x: 10, y: 5 }),
    };

    // Terminal class
    function Terminal (options) {
        options = options || {};

        // Public fields
        var that = {
            parent_element: options.parent_element || "body",
            width:          options.width || 80,
            height:         options.height,
            x:              0,
            y:              0,
            block_width:    16,
            block_height:   16,
            scale:          options.scale || 1,
            buffer:         Array(),
            canvas:         document.createElement("canvas"),
            debug_links:    options.debug_links || false,
        };

        // Canvas setup
        that.canvas.width = that.width * that.block_width;
        that.canvas.height = that.height * that.block_height;
        $(that.parent_element).append(that.canvas);
        that.context = that.canvas.getContext("2d");

        // Load a text file into the buffer and render
        that.load = function (url) {
            if (url === null || url === "") {
                that.reset();
                return;
            };
            $.ajax({
                url: url,
                dataType: 'text',
                success: function (data) {
                    that.reset();
                    lines = data.split('\n');
                    that.canvas.height = lines.length * that.block_height;
                    that.buffer = parse(lines);
                    that.render();
                },
                error: function (data) {
                    that.reset();
                    that.canvas.height = 3 * that.block_height;
                    that.buffer = ['', ' 404 Not found', ''];
                    that.render();
                },
            });
        };

        // Clear the canvas (not the buffer)
        that.clear = function () {
            that.context.clearRect(0, 0, that.canvas.width, that.canvas.height);
        };

        // Clear the canvas and the buffer
        that.reset = function () {
            that.clear();
            that.buffer = Array();
        };

        // Render the buffer onto the canvas
        that.render = function () {
            var
                buffer_height = that.buffer.length,
                stop_y = buffer_height;

            that.clear();
            that.draw_border();
            for (var y = 0; y < stop_y; y++) {
                line = that.buffer[y];
                for (var x = 0, len = Math.min(line.length, that.width); x < len; x++) {
                    that.draw_character(line[x], x, y);
                }
            }
            if (that.debug_links === true) {
                that.draw_links();
            }
        };

        // Draw a character onto a block position
        that.draw_character = function (c, x, y) {
            character = Characters[c];
            if (character) {
                character.render(that.context, x, y, that.scale);
            }
        };

        // Highlight all links
        that.draw_links = function () {
            var
                links = that.buffer.links || Array(),
                link = null;

            for (var i = 0, len = links.length; i < len; i++) {
                link = links[i];
                that.draw_link(link);
            }
        };

        // Highlight a link
        that.draw_link = function (link) {
            that.context.strokeStyle = "red";
            that.context.strokeRect(
                link.x1 * that.block_width,
                (link.y1) * that.block_height,
                (link.x2 - link.x1) * that.block_width,
                (link.y2 - link.y1) * that.block_height
            )
        };

        // Draw a border around the canvas (actually draw background)
        that.draw_border = function () {
            that.context.fillStyle = '#4130a4';
            that.context.fillRect(0, 0, that.canvas.width, that.canvas.height);
        }

        // Return the link (or null) under the cursor
        that.get_link = function (x, y) {
            var
                links = that.buffer.links || Array(),
                link = null;

            for (var i = 0, len = links.length; i < len; i++) {
                link = links[i];
                if (x >= link.x1 * that.block_width
                 && x <= link.x2 * that.block_width
                 && y >= link.y1 * that.block_height
                 && y <= link.y2 * that.block_height) {
                    return link;
                }
            }
        };

        // On mouse down should visit link if any under cursor
        that.on_mouse_down = function (event) {
            var
                coords = that.canvas.relMouseCoords(event),
                link = that.get_link(coords.x, coords.y);

            if (link) {
                document.location = link.url;
            }
        };

        // On mouse move should show hand when link is under cursor
        that.on_mouse_move = function (event) {
            var
                coords = that.canvas.relMouseCoords(event),
                link = that.get_link(coords.x, coords.y);

            if (link) {
                document.status = link.url;
                that.canvas.style.cursor = 'pointer';
            } else {
                that.canvas.style.cursor = 'auto';
            }
        };

        // Mouse control events
        that.canvas.addEventListener("mousedown", that.on_mouse_down, false);
        that.canvas.addEventListener("mousemove", that.on_mouse_move, false);


        return that;
    };

    // Character class
    function Character (options) {
        var that = {};
        that.image = options.image;
        that.width = 16;
        that.height = 16;
        that.x = options.x;
        that.y = options.y;

        that.render = function (context, x, y, scale) {
            context.drawImage(
                that.image,
                that.x * that.width,
                that.y * that.height,
                that.width,
                that.height,
                x * that.width * scale,
                y * that.height * scale,
                that.width * scale,
                that.height * scale
            );
        };

        return that;
    }

    function parse (lines) {
        var state = 0,
            title,
            url,
            start,
            links = Array(),
            result_line;
            result = Array();

        for (var y = 0, len = lines.length; y < len; y++) {
            var
                line = lines[y],
                result_x = 0;

            result_line = '';
            state = 0;
            for (var x = 0, llen = line.length; x < llen; x++) {
                c = line[x];
                if (state === 0  && c === '[') {
                    state = 1;
                    start = result_x;
                    title = '';
                    url = '';
                } else if (state === 0) {
                    result_line += c;
                    result_x++;
                } else if (state === 1  && c === '[') {
                    state = 2;
                } else if (state === 1) {
                    state = 0;
                } else if (state === 2 && c === '|') {
                    state = 3;
                } else if (state === 2) {
                    title += c;
                } else if (state === 3 && c === ']') {
                    state = 4;
                } else if (state === 3) {
                    url += c;
                } else if (state === 4 && c === ']') {
                    var link = {
                        x1: start,
                        x2: start + title.length + 2,
                        y1: y,
                        y2: y + 1,
                        title: title,
                        url: url,
                    };
                    links.push(link);
                    result_line += '[' + title + ']';
                    result_x += title.length + 2;
                    state = 0;
                }
            }
            result.push(result_line);
        }

        result.links = links;
        return result;
    };

    // Exports
    $.Terminal = Terminal;
    $.Terminal.OnLoad = OnLoad;
}());

function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
}

HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;
