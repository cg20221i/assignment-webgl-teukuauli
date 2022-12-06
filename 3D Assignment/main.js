function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
        //4
        3.4, -3, -1,     1, 0, 0, 0, 1, 0,   // Index:  0    
        3.4, -1.9, -1,   1, 0, 0, 0, 1, 0,   // Index:  1
        2.9, -1.9, -1,   1, 0, 0, 0, 1, 0,   // Index:  2
        2.9, -3, -1,     1, 0, 0, 0, 1, 0,   // Index:  3

        3.4, -3, 0,      1, 0, 0, 0, 1, 0,   // Index:  4    
        3.4, -3, -1,     1, 0, 0, 0, 1, 0,   // Index:  5
        2.9, -3, -1,     1, 0, 0, 0, 1, 0,   // Index:  6
        2.9, -3, 0,      1, 0, 0, 0, 1, 0,   // Index:  7

        2.9, -3, -1,     1, 0, 0, 1, 0, 0,   // Index:  8    
        2.9, -3, 0,      1, 0, 0, 1, 0, 0,   // Index:  9
        2.9, -1.9, 0,    1, 0, 0, 1, 0, 0,   // Index:  10
        2.9, -1.9, -1,   1, 0, 0, 1, 0, 0,   // Index:  11

        3.4, -3, -1  ,  1, 0, 0, 0, 1, 0,   // Index:  12   
        3.4, -1.9, -1,  1, 0, 0, 0, 1, 0,   // Index:  13
        3.4, -1.9, 0,   1, 0, 0, 0, 1, 0,   // Index:  14
        3.4, -3, 0,     1, 0, 0, 0, 1, 0,   // Index:  15

        3.4, -1.9, -1,   1, 0, 0, 0, 1, 0,   // Index:  20    
        3.4, -1.9, 0,    1, 0, 0, 0, 1, 0,   // Index:  21
        2.4, -1.9, 0,    1, 0, 0, 0, 1, 0,   // Index:  22
        2.4, -1.9, -1,   1, 0, 0, 0, 1, 0,   // Index:  23

        2.4, -0.5, -1,   1, 0, 0, 0, 1, 0,   // Index:  24    
        2.4, -0.5, 0,    1, 0, 0, 0, 1, 0,   // Index:  25
        2.4, -1.9, 0,    1, 0, 0, 0, 1, 0,   // Index:  26
        2.4, -1.9, -1,   1, 0, 0, 0, 1, 0,   // Index:  27

        2.4, -0.5, -1,   1, 0, 0, 0, 1, 0,   // Index:  28    
        2.4, -0.5, 0,    1, 0, 0, 0, 1, 0,   // Index:  29
        1.8, -0.5, 0,    1, 0, 0, 0, 1, 0,   // Index:  30
        1.8, -0.5, -1,   1, 0, 0, 0, 1, 0,   // Index:  31

        2.4, -0.5, 0,   1, 0, 0, 0, 1, 0,    // Index: 32
        1.8, -0.5, 0,   1, 0, 0, 0, 1, 0,    // Index: 33
        1.8, -1.9, 0,   1, 0, 0, 0, 1, 0,    // Index: 34
        2.4, -1.9, 0,   1, 0, 0, 0, 1, 0,     // Index: 35

        3.4, -1.4, 0,   1, 0, 0, 0, 1, 0,    // Index: 36
        3.4, -1.9, 0,   1, 0, 0, 0, 1, 0,    // Index: 37
        1.8, -1.9, 0,   1, 0, 0, 0, 1, 0,    // Index: 38
        1.8, -1.4, 0,   1, 0, 0, 0, 1, 0,     // Index: 39

        3.4, -1.4, -1,   1, 0, 0, 0, 1, 0,    // Index: 40
        3.4, -1.9, -1,   1, 0, 0, 0, 1, 0,    // Index: 41
        1.8, -1.9, -1,   1, 0, 0, 0, 1, 0,    // Index: 42
        1.8, -1.4, -1,   1, 0, 0, 0, 1, 0,     // Index: 43
        
        3.4, -1.4, 0,    1, 0, 0, 0, 1, 0,    // Index: 48
        3.4, -1.4, -1,   1, 0, 0, 0, 1, 0,    // Index: 49
        1.8, -1.4, -1,   1, 0, 0, 0, 1, 0,    // Index: 50
        1.8, -1.4, 0,    1, 0, 0, 0, 1, 0,     // Index: 51
        
        1.8, -1.4, -1,     1, 0, 0, 0, 1, 0,    // Index: 52
        1.8, -1.4, 0,      1, 0, 0, 0, 1, 0,    // Index: 53
        1.8, -2.9, 0,      1, 0, 0, 0, 1, 0,    // Index: 54
        1.8, -2.9, -1,     1, 0, 0, 0, 1, 0,     // Index: 55

        1.8, -2.9, 0,     1, 0, 0, 0, 1, 0,    // Index: 56
        2.4, -2.9, 0,      1, 0, 0, 0, 1, 0,    // Index: 57
        2.4, -1.9, 0,      1, 0, 0, 0, 1, 0,    // Index: 58
        1.8, -1.9, 0,     1, 0, 0, 0, 1, 0,     // Index: 59

        1.8, -1.4, -1,     1, 0, 0, 1, 0, 0,    // Index: 60
        1.8, -1.4, 0,      1, 0, 0, 1, 0, 0,    // Index: 61
        1.8, -0.5, 0,      1, 0, 0, 1, 0, 0,    // Index: 62
        1.8, -0.5, -1,     1, 0, 0, 1, 0, 0,     // Index: 63

        2.4, -2.9, 0,     1, 0, 0, 0, 1, 0,    // Index: 64
        2.4, -2.9, -1,      1, 0, 0, 0, 1, 0,    // Index: 65
        1.8, -2.9, -1,      1, 0, 0, 0, 1, 0,    // Index: 66
        1.8, -2.9, 0,     1, 0, 0, 0, 1, 0,     // Index: 67

        1.8, -1.4, -1,     1, 0, 0, 0, 1, 0,    // Index: 67
        1.8, -1.4, 0,      1, 0, 0, 0, 1, 0,    // Index: 68
        1.8, -2.9, 0,      1, 0, 0, 0, 1, 0,    // Index: 69
        1.8, -2.9, -1,     1, 0, 0, 0, 1, 0,     // Index: 70

        2.4, -2.9, -1,     1, 0, 0, 0, 1, 0,    // Index: 71
        2.4, -0.5, -1,      1, 0, 0, 0, 1, 0,    // Index: 72
        1.8, -0.5, -1,      1, 0, 0, 0, 1, 0,    // Index: 73
        1.8, -2.9, -1,     1, 0, 0, 0, 1, 0,     // Index: 74

        2.4, -2.9, -1,     1, 0, 0, 0, 1, 0,    // Index: 75
        2.4, -2.9, 0,      1, 0, 0, 0, 1, 0,    // Index: 76
        2.4, -1.8, 0,      1, 0, 0, 0, 1, 0,    // Index: 77
        2.4, -1.8, -1,     1, 0, 0, 0, 1, 0,     // Index: 78

        3.4, -2.9, -1,     1, 0, 0, 0, 1, 0,    // Index: 71
        3.4, -1.4, -1,      1, 0, 0, 0, 1, 0,    // Index: 72
        3.4, -1.4, 0,      1, 0, 0, 0, 1, 0,    // Index: 73
        3.4, -2.9, 0,     1, 0, 0, 0, 1, 0,     // Index: 74

       
        //2
        0.3, -2.9, -1,  1, 0, 0, 0, 1, 0,   // Index:  87    
        0.3, -2.4, -1,  1, 0, 0, 0, 1, 0,   // Index:  88
        -2, -2.4, -1,   1, 0, 0, 0, 1, 0,   // Index:  89
        -2, -2.9, -1,   1, 0, 0, 0, 1, 0,   // Index:  90

        0.3, -2.9, 0,    1, 0, 0, 0, 1, 0,   // Index:  91    
        0.3, -2.9, -1,   1, 0, 0, 0, 1, 0,   // Index:  92
        -2, -2.9, -1,    1, 0, 0, 0, 1, 0,   // Index:  93
        -2, -2.9, 0,     1, 0, 0, 0, 1, 0,   // Index:  94

        -2, -2.4, -1,    1, 0, 0, 0, 1, 0,   // Index:  95    
        -2, -2.4, 0,     1, 0, 0, 0, 1, 0,   // Index:  96
        -2, -2.9, 0,     1, 0, 0, 0, 1, 0,   // Index:  97
        -2, -2.9, -1,    1, 0, 0, 0, 1, 0,   // Index:  98

        0.3, -2.4, -1,   1, 0, 0, 0, 1, 0,   // Index:  99   
        0.3, -2.9, -1,   1, 0, 0, 0, 1, 0,   // Index:  100
        0.3, -2.9, 0,    1, 0, 0, 0, 1, 0,   // Index:  101
        0.3, -2.4, 0,    1, 0, 0, 0, 1, 0,   // Index:  102

        -2, -2.9, -1,    1, 0, 0, 0, 1, 0,   // Index:  103   
        0.3, -2.9, 0,    1, 0, 0, 0, 1, 0,   // Index:  104
        0.3, -2.9, 0,    1, 0, 0, 0, 1, 0,   // Index:  105
        -2, -2.9, -1,    1, 0, 0, 0, 1, 0,   // Index:  106

        0.3, -2.4, -1,   1, 0, 0, 0, 1, 0,   // Index:  107   
        0.3, -2.4, 0,    1, 0, 0, 0, 1, 0,   // Index:  108
        -2, -2.4, 0,     1, 0, 0, 0, 1, 0,   // Index:  109
        -2, -2.4, -1,    1, 0, 0, 0, 1, 0,   // Index:  110

        -2, -2.9, 0,     1, 0.5, 0, 0, 1, 0,   // Index: 111
        -2.4, -2.9, 0,   1, 0.5, 0, 0, 1, 0,   // Index: 112
        -2.4, -1.9, 0,   1, 0.5, 0, 0, 1, 0,   // Index: 113
        -2, -1.9, 0,     1, 0.5, 0, 0, 1, 0,   // Index: 114

        -2, -2.9, -1,    1, 0.5, 0, 0, 1, 0,   // Index: 115
        -2.4, -2.9, -1,  1, 0.5, 0, 0, 1, 0,   // Index: 116
        -2.4, -1.9, -1,  1, 0.5, 0, 0, 1, 0,   // Index: 117
        -2, -1.9, -1,    1, 0.5, 0, 0, 1, 0,   // Index: 118

        -2, -1.9, -1,   1, 0.5, 0, 1, 0, 0,   // Index: 119
        -2, -2.4, -1,   1, 0.5, 0, 1, 0, 0,   // Index: 120
        -2, -2.4, 0,    1, 0.5, 0, 1, 0, 0,   // Index: 121
        -2, -1.9, 0,    1, 0.5, 0, 1, 0, 0,   // Index: 122

        -2.4, -2.9, -1, 1, 0.5, 0, 1, 0, 0,   // Index: 123
        -2.4, -1.9, -1, 1, 0.5, 0, 1, 0, 0,   // Index: 124
        -2.4, -1.9, 0,  1, 0.5, 0, 1, 0, 0,   // Index: 125
        -2.4, -2.9, 0,  1, 0.5, 0, 1, 0, 0,   // Index: 126

        -2, -2.9, 0,    1, 0.5, 0, 1, 0, 0,   // Index: 119
        -2, -2.9, -1,   1, 0.5, 0, 1, 0, 0,   // Index: 120
        -2.4, -2.9, -1, 1, 0.5, 0, 1, 0, 0,   // Index: 121
        -2.4, -2.9, 0,  1, 0.5, 0, 1, 0, 0,   // Index: 122

        -0.1, -1.9, -1, 1, 0, 0, 0, 1, 0,   // Index:  123    
        -0.1, -1.4, -1, 1, 0, 0, 0, 1, 0,   // Index:  124
        -2.4, -1.4, -1, 1, 0, 0, 0, 1, 0,   // Index:  125
        -2.4, -1.9, -1, 1, 0, 0, 0, 1, 0,   // Index:  126

        -0.1, -1.9, 0,  1, 0, 0, 0, 1, 0,   // Index:  127    
        -0.1, -1.9, -1, 1, 0, 0, 0, 1, 0,   // Index: 128
        -2.4, -1.9, -1, 1, 0, 0, 0, 1, 0,   // Index:  129
        -2.4, -1.9, 0,  1, 0, 0, 0, 1, 0,   // Index:  130

        -2.4, -1.4, -1,     1, 0, 0, 0, 1, 0,   // Index:  131    
        -2.4, -1.4, 0,      1, 0, 0, 0, 1, 0,   // Index:  132
        -2.4, -1.9, 0,      1, 0, 0, 0, 1, 0,   // Index:  133
        -2.4, -1.9, -1,     1, 0, 0, 0, 1, 0,   // Index:  134

        -0.1, -1.4, -1,     1, 0, 0, 0, 1, 0,   // Index:  135  
        -0.1, -1.9, -1,     1, 0, 0, 0, 1, 0,   // Index:  136
        -0.1, -1.9, 0,      1, 0, 0, 0, 1, 0,   // Index:  137
        -0.1, -1.4, 0,      1, 0, 0, 0, 1, 0,   // Index:  138

        -2.4, -1.9, -1,     1, 0, 0, 0, 1, 0,   // Index:  139   
        0.3, -1.9, 0,       1, 0, 0, 0, 1, 0,   // Index:  140
        0.3, -1.9, 0,       1, 0, 0, 0, 1, 0,   // Index:  141
        -2.4, -1.9, -       1, 1, 0, 0, 0, 1, 0,   // Index:  142

        -2.4, -1.9, -1,     1, 0, 0, 0, 1, 0,   // Index:  143   
        -0.1, -1.9, 0,      1, 0, 0, 0, 1, 0,   // Index:  144
        -0.1, -1.9, 0,      1, 0, 0, 0, 1, 0,   // Index:  145
        -2.4, -1.9, -1,     1, 0, 0, 0, 1, 0,   // Index:  146

        -0.1, -1.4, -1,     1, 0, 0, 0, 1, 0,   // Index:  147   
        -0.1, -1.4, 0,      1, 0, 0, 0, 1, 0,   // Index:  148
        -2.4, -1.4, 0,      1, 0, 0, 0, 1, 0,   // Index:  149
        -2.4, -1.4, -1,     1, 0, 0, 0, 1, 0,   // Index:  150

        -0.1, -1.9, 0,      1, 0.5, 0, 0, 1, 0,   // Index: 151
        0.3, -1.9, 0,       1, 0.5, 0, 0, 1, 0,   // Index: 152
        0.3, -1, 0,         1, 0.5, 0, 0, 1, 0,   // Index: 153
        -0.1, -1, 0,        1, 0.5, 0, 0, 1, 0,   // Index: 154

        -0.1, -1.9, -1,     1, 0.5, 0, 0, 1, 0,   // Index: 155
        0.3, -1.9, -1,      1, 0.5, 0, 0, 1, 0,   // Index: 156
        0.3, -1, -1,        1, 0.5, 0, 0, 1, 0,   // Index: 157
        -0.1, -1, -1,       1, 0.5, 0, 0, 1, 0,   // Index: 158

        0.3, -1, -1,        1, 0.5, 0, 1, 0, 0,   // Index: 159
        0.3, -1.9, -1,      1, 0.5, 0, 1, 0, 0,   // Index: 160
        0.3, -1.9, 0,       1, 0.5, 0, 1, 0, 0,   // Index: 161
        0.3, -1, 0,         1, 0.5, 0, 1, 0, 0,   // Index: 162

        -0.1, -1.4, -1,     1, 0.5, 0, 1, 0, 0,   // Index: 163
        -0.1, -1, -1,       1, 0.5, 0, 1, 0, 0,   // Index: 164
        -0.1, -1, 0,        1, 0.5, 0, 1, 0, 0,   // Index: 165
        -0.1, -1.4, 0,      1, 0.5, 0, 1, 0, 0,   // Index: 166

        0.3, -1.9, 0,       1, 0.5, 0, 1, 0, 0,   // Index: 167
        0.3, -1.9, -1,      1, 0.5, 0, 1, 0, 0,   // Index: 168
        -0.1, -1.9, -1,     1, 0.5, 0, 1, 0, 0,   // Index: 169
        -0.1, -1.9, 0,      1, 0.5, 0, 1, 0, 0,   // Index: 170

        0.3, -1, -1,        1, 0, 0, 0, 1, 0,   // Index:  171    
        0.3, -0.5, -1,      1, 0, 0, 0, 1, 0,   // Index:  172
        -2.4, -0.5, -1,     1, 0, 0, 0, 1, 0,   // Index:  173
        -2.4, -1, -1,       1, 0, 0, 0, 1, 0,   // Index:  173

        0.3, -0.5, 0,       1, 0, 0, 0, 1, 0,   // Index:  174    
        0.3, -0.5, -1,      1, 0, 0, 0, 1, 0,   // Index:  175
        -2.4, -0.5, -1,     1, 0, 0, 0, 1, 0,   // Index:  176
        -2.4, -0.5, 0,      1, 0, 0, 0, 1, 0,   // Index:  177

        -2.4, -0.5, -1,     1, 0, 0, 0, 1, 0,   // Index:  178    
        -2.4, -0.5, 0,      1, 0, 0, 0, 1, 0,   // Index:  179
        -2.4, -1, 0,        1, 0, 0, 0, 1, 0,   // Index:  180
        -2.4, -1, -1,       1, 0, 0, 0, 1, 0,   // Index:  181

        0.3, -0.5, -1,      1, 0, 0, 0, 1, 0,   // Index:  182   
        0.3, -1, -1,        1, 0, 0, 0, 1, 0,   // Index:  183
        0.3, -1, 0,         1, 0, 0, 0, 1, 0,   // Index:  184
        0.3, -0.5, 0,       1, 0, 0, 0, 1, 0,   // Index:  185

        -2.4, -1, -1,       1, 0, 0, 0, 1, 0,   // Index:  186   
        0.3, -1, 0,         1, 0, 0, 0, 1, 0,   // Index:  187
        0.3, -1, 0,         1, 0, 0, 0, 1, 0,   // Index:  188
        -2.4, -1, -1,       1, 0, 0, 0, 1, 0,   // Index:  189

        0.3, -1, -1,         1, 0, 0, 0, 1, 0,   // Index:  190  
        0.3, -1, 0,          1, 0, 0, 0, 1, 0,   // Index:  191
        -2.4, -1, 0,         1, 0, 0, 0, 1, 0,   // Index:  192
        -2.4, -1, -1,        1, 0, 0, 0, 1, 0,   // Index:  193

        
        //A
        3.4,  0, -1,       1, 0, 0, 0, 1, 0,   // Index:  194    
        3.4,  0.5, -1,     1, 0, 0, 0, 1, 0,   // Index:  195
        1.8, 0.5, -1,     1, 0, 0, 0, 1, 0,   // Index:  196
        1.8, 0, -1,       1, 0, 0, 0, 1, 0, // Index:  197

        3.4,  0.5, 0,       1, 0, 0, 0, 1, 0,   // Index:  198    
        3.4,  0.5, -1,     1, 0, 0, 0, 1, 0,   // Index:  199
        1.8, 0.5, -1,     1, 0, 0, 0, 1, 0,   // Index:  200
        1.8, 0.5, 0,       1, 0, 0, 0, 1, 0, // Index:  201

        1.8,  0.5, -1,       1, 0, 0, 0, 1, 0,   // Index:  202    
        1.8,  0.5, 0,        1, 0, 0, 0, 1, 0,   // Index:  203
        1.8, 0, 0,           1, 0, 0, 0, 1, 0,   // Index:  204
        1.8, 0, -1,          1, 0, 0, 0, 1, 0, // Index:  205

        3.4,  0, -1,       1, 0, 0, 1, 0, 0,   // Index:  206   
        3.4,  0.5, -1,     1, 0, 0, 1, 0, 0,   // Index:  207
        3.4, 0.5, 0,       1, 0, 0, 1, 0, 0,   // Index:  208
        3.4, 0, 0,         1, 0, 0, 1, 0, 0, // Index:  209

        1.8,  0.5, 0,       1, 0, 0, 0, 1, 0,   // Index:  210    
        3.4,  0.5, 0,        1, 0, 0, 0, 1, 0,   // Index:  211
        3.4, 0, 0,           1, 0, 0, 0, 1, 0,   // Index:  212
        1.8, 0, 0,          1, 0, 0, 0, 1, 0, // Index:  213

        3.4,  0.5, -1,       1, 0, 0, 0, 1, 0,   // Index:  214    
        3.4,  0.5, 0,        1, 0, 0, 0, 1, 0,   // Index:  215
        1.8, 0.5, 0,        1, 0, 0, 0, 1, 0,   // Index:  216
        1.8, 0.5, -1,       1, 0, 0, 0, 1, 0, // Index:  217

        2.3,  0.5, -1,       1, 0, 0, 0, 1, 0,   // Index:  218    
        2.3,  3, -1,         1, 0, 0, 0, 1, 0,   // Index:  219
        1.8, 3, -1,          1, 0, 0, 0, 1, 0,   // Index:  220
        1.8, 0.5, -1,        1, 0, 0, 0, 1, 0, // Index:  221

        1.8,  0.5, 0,       1, 0, 0, 0, 1, 0,   // Index:  222    
        2.3,  0.5, 0,       1, 0, 0, 0, 1, 0,   // Index:  223
        2.3, 3, 0,          1, 0, 0, 0, 1, 0,   // Index:  224
        1.8, 3, 0,          1, 0, 0, 0, 1, 0, // Index:  225

        1.8,  0.5, -1,       1, 0, 0, 0, 1, 0,   // Index:  226    
        1.8,  0.5, 0,        1, 0, 0, 0, 1, 0,   // Index:  227
        1.8, 3, 0,           1, 0, 0, 0, 1, 0,   // Index:  228
        1.8, 3, -1,          1, 0, 0, 0, 1, 0, // Index:  229
        
        2.3,  0.5, -1,       1, 0, 0, 0, 1, 0,   // Index:  230    
        2.3,  3, -1,         1, 0, 0, 0, 1, 0,   // Index:  231
        2.3, 3, 0,           1, 0, 0, 0, 1, 0,   // Index:  232
        2.3, 0.5, 0,         1, 0, 0, 0, 1, 0, // Index:  233

        2.3,  3, -1,       1, 0, 0, 0, 1, 0,   // Index:  234    
        2.3,  3, 0,        1, 0, 0, 0, 1, 0,   // Index:  235
        1.8, 3, 0,         1, 0, 0, 0, 1, 0,   // Index:  236
        1.8, 3, -1,        1, 0, 0, 0, 1, 0, // Index:  237

        3.4,  2.5, -1,       1, 0, 0, 0, 1, 0,   // Index:  238    
        3.4,  3, -1,         1, 0, 0, 0, 1, 0,   // Index:  239
        2.3, 3, -1,         1, 0, 0, 0, 1, 0,   // Index:  240
        2.3, 2.5, -1,       1, 0, 0, 0, 1, 0, // Index:  241

        3.4,  2.5, -1,       1, 0, 0, 1, 0, 0,   // Index:  242    
        3.4,  3, -1,         1, 0, 0, 1, 0, 0,   // Index:  243
        3.4, 3, 0,          1, 0, 0, 1, 0, 0,   // Index:  244
        3.4, 2.5, 0,        1, 0, 0, 1, 0, 0, // Index:  245

        2.3,  2.5, 0,       1, 0, 0, 0, 1, 0,   // Index:  246    
        3.4,  2.5, 0,        1, 0, 0, 0, 1, 0,   // Index:  247
        3.4, 3, 0,           1, 0, 0, 0, 1, 0,   // Index:  248
        2.3, 3, 0,          1, 0, 0, 0, 1, 0, // Index:  249

        3.4,  2.5, 0,       1, 0, 0, 0, 1, 0,   // Index:  250    
        3.4,  2.5, -1,      1, 0, 0, 0, 1, 0,   // Index:  251
        2.3, 2.5, -1,      1, 0, 0, 0, 1, 0,   // Index:  252
        2.3, 2.5, 0,       1, 0, 0, 0, 1, 0, // Index:  253

        // 3.4,  3, -1,       1, 0, 0, 0, 1, 0,   // Index:  254    
        // 3.4,  3, 0,        1, 0, 0, 0, 1, 0,   // Index:  255
        // 2.3, 3, 0,        1, 0, 0, 0, 1, 0,   // Index:  256
        // 2.3, 3, -1,       1, 0, 0, 0, 1, 0, // Index:  257

        3.4,  1.6, -1,        1, 0, 0, 0, 1, 0,   // Index:  258    
        3.4,  2.5, -1,        1, 0, 0, 0, 1, 0,   // Index:  259
        3, 2.5, -1,        1, 0, 0, 0, 1, 0,   // Index:  260
        3, 1.6, -1,        1, 0, 0, 0, 1, 0, // Index:  261

        3.4,  1.6, 0,         1, 0, 0, 0, 1, 0,   // Index:  262   
        3.4,  1.6, -1,        1, 0, 0, 0, 1, 0,   // Index:  263
        3, 1.6, -1,        1, 0, 0, 0, 1, 0,   // Index:  264
        3, 1.6, 0,         1, 0, 0, 0, 1, 0, // Index:  265

        3.4,  1.6, -1,        1, 0, 0, 0, 1, 0,   // Index:  266    
        3.4,  2.5, -1,        1, 0, 0, 0, 1, 0,   // Index:  267
        3.4,  2.5, 0,         1, 0, 0, 0, 1, 0,   // Index:  268
        3.4,  1.6, 0,         1, 0, 0, 0, 1, 0, // Index:  269

        3,  1.6, -1,        1, 0, 0, 0, 1, 0,   // Index:  270    
        3,  1.6, 0,         1, 0, 0, 0, 1, 0,   // Index:  271
        3,  2.5, 0,         1, 0, 0, 0, 1, 0,   // Index:  272
        3,  2.5, -1,        1, 0, 0, 0, 1, 0, // Index:  273

        3,  1.6, -1,        1, 0, 0, 0, 1, 0,   // Index:  274    
        3,  2.1, -1,        1, 0, 0, 0, 1, 0,   // Index:  275
        2.3, 2.1, -1,        1, 0, 0, 0, 1, 0,   // Index:  276
        2.3, 1.6, -1,        1, 0, 0, 0, 1, 0, // Index:  277
        
        2.3,  1.6, 0,        1, 0, 0, 0, 1, 0,   // Index:  278    
        3,  1.6, 0,        1, 0, 0, 0, 1, 0,   // Index:  279
        3,  2.1, 0,        1, 0, 0, 0, 1, 0,   // Index:  280
        2.3,  2.1, 0,        1, 0, 0, 0, 1, 0, // Index:  281

        // 3,  2.1, 0,         1, 0, 0, 0, 1, 0,   // Index:  282    
        // 3,  2.1, -1,        1, 0, 0, 0, 1, 0,   // Index:  283
        // 2.3,  2.1, -1,        1, 0, 0, 0, 1, 0,   // Index:  284
        // 2.3,  2.1, 0,         1, 0, 0, 0, 1, 0, // Index:  285

        //r
        3,  2.1, -1,        1, 0, 0, 0, 1, 0,   // Index:  286    
        3,  2.1, 0,         1, 0, 0, 0, 1, 0,   // Index:  287
        2.3,  2.1, 0,         1, 0, 0, 0, 1, 0,   // Index:  288
        2.3,  2.1, -1,        1, 0, 0, 0, 1, 0, // Index:  289
        
        0.3,  0, -1,        1, 0, 0, 0, 1, 0,   // Index:  290    
        0.3,  3, -1,         1, 0, 0, 0, 1, 0,   // Index:  291
        -0.2,  3, -1,         1, 0, 0, 0, 1, 0,   // Index:  292
        -0.2,  0, -1,        1, 0, 0, 0, 1, 0, // Index:  293

        0.3,  0, 0,           1, 0, 0, 0, 1, 0,   // Index:  294    
        0.3,  0, -1,          1, 0, 0, 0, 1, 0,   // Index:  295
        -0.2,  0, -1,         1, 0, 0, 0, 1, 0,   // Index:  296
        -0.2,  0, 0,          1, 0, 0, 0, 1, 0, // Index:  297

        -0.2,  0, -1,        1, 0, 0, 0, 1, 0,   // Index:  298   
        -0.2,  0, 0,         1, 0, 0, 0, 1, 0,   // Index:  299
        -0.2,  3, 0,         1, 0, 0, 0, 1, 0,   // Index:  300
        -0.2,  3, -1,        1, 0, 0, 0, 1, 0, // Index:  301

        0.3,  0, -1,        1, 0, 0, 0, 1, 0,   // Index:  302    
        0.3,  3, -1,        1, 0, 0, 0, 1, 0,   // Index:  303
        0.3,  3, 0,         1, 0, 0, 0, 1, 0,   // Index:  304
        0.3,  0, 0,         1, 0, 0, 0, 1, 0, // Index:  305

        -0.2,  0, 0,        1, 0, 0, 0, 1, 0,   // Index:  306   
        0.3,  0, 0,         1, 0, 0, 0, 1, 0,   // Index:  307
        0.3,  3, 0,         1, 0, 0, 0, 1, 0,   // Index:  308
        -0.2,  3, 0,        1, 0, 0, 0, 1, 0, // Index:  309

        0.3,  3, -1,        1, 0, 0, 0, 1, 0,   // Index:  310    
        0.3,  3, 0,         1, 0, 0, 0, 1, 0,   // Index:  311
        -0.2,  3, 0,         1, 0, 0, 0, 1, 0,   // Index:  312
        -0.2,  3, -1,        1, 0, 0, 0, 1, 0, // Index:  313

        -0.2,  0, -1,        1, 0, 0, 0, 1, 0,   // Index:  314   
        -0.2,  0.5, -1,         1, 0, 0, 0, 1, 0,   // Index:  315
        -3,  0.5, -1,         1, 0, 0, 0, 1, 0,   // Index:  316
        -3,  0, -1,        1, 0, 0, 0, 1, 0, // Index:  317

        -0.2,  0, 0,        1, 0, 0, 0, 1, 0,   // Index:  318   
        -0.2,  0, -1,         1, 0, 0, 0, 1, 0,   // Index:  319
        -3,  0, -1,         1, 0, 0, 0, 1, 0,   // Index:  320
        -3,  0, 0,        1, 0, 0, 0, 1, 0, // Index:  321

        -3, 0, -1,      0, 1, 0, -1, 0, 0,   // Index:  
        -3, 0, 0,       0, 1, 0, -1, 0, 0,   // Index: 
        -3, 0.5, 0,     0, 1, 0, -1, 0, 0,   // Index: 
        -3, 0.5, -1,   0, 1, 0, -1, 0, 0,

        -3, 0.5, 0, 1, 0.5, 0, 0, 1, 0,   // Index: 16
        -0.2, 0.5, 0, 1, 0.5, 0, 0, 1, 0,   // Index: 17
        -0.2, 0, 0, 1, 0.5, 0, 0, 1, 0,   // Index: 18
        -3, 0, 0, 1, 0.5, 0, 0, 1, 0,   // Index: 19

        -0.2, 0.5, -1, 1, 1, 1, 0, 1, 0,    // Index: 20
        -0.2, 0.5, 0, 1, 1, 1, 0, 1, 0,    // Index: 21
        -3, 0.5, 0, 1, 1, 1, 0, 1, 0,    // Index: 22
        -3, 0.5, -1, 1, 1, 1, 0, 1, 0,     // Index: 23

       









       

          //Cube
         // Face A       // Red      // Surface orientation
         -1, -1, -4,     1, 0, 0,    0, 0, -1,   // Index:  0    
         1, -1, -4,     1, 0, 0,    0, 0, -1,   // Index:  1
         1,  1, -4,     1, 0, 0,    0, 0, -1,   // Index:  2
        -1,  1, -4,     1, 0, 0,    0, 0, -1,   // Index:  3
        // Face B       // Yellow
        -1, -1,  -2,     1, 1, 0,    0, 0, 1,    // Index:  4
         1, -1,  -2,     1, 1, 0,    0, 0, 1,    // Index:  5
         1,  1,  -2,     1, 1, 0,    0, 0, 1,    // Index:  6
        -1,  1,  -2,     1, 1, 0,    0, 0, 1,    // Index:  7
        // Face C       // Green
        -1, -1, -4,     0, 1, 0,    -1, 0, 0,   // Index:  8
        -1,  1, -4,     0, 1, 0,    -1, 0, 0,   // Index:  9
        -1,  1,  -2,     0, 1, 0,    -1, 0, 0,   // Index: 10
        -1, -1,  -2,     0, 1, 0,    -1, 0, 0,   // Index: 11
        // Face D       // Blue
         1, -1, -4,     0, 0, 1,    1, 0, 0,    // Index: 12
         1,  1, -4,     0, 0, 1,    1, 0, 0,    // Index: 13
         1,  1,  -2,     0, 0, 1,    1, 0, 0,    // Index: 14
         1, -1,  -2,     0, 0, 1,    1, 0, 0,    // Index: 15
        // Face E       // Orange
        -1, -1, -4,     1, 0.5, 0,  0, -1, 0,   // Index: 16
        -1, -1,  -2,     1, 0.5, 0,  0, -1, 0,   // Index: 17
         1, -1,  -2,     1, 0.5, 0,  0, -1, 0,   // Index: 18
         1, -1, -4,     1, 0.5, 0,  0, -1, 0,   // Index: 19
        // Face F       // White
        -1,  1, -4,     1, 1, 1,    0, 1, 0,    // Index: 20
        -1,  1,  -2,     1, 1, 1,    0, 1, 0,    // Index: 21
         1,  1,  -2,     1, 1, 1,    0, 1, 0,    // Index: 22
         1,  1, -4,     1, 1, 1,    0, 1, 0     // Index: 23

       
        
        


    ];

    var indices = [
        0, 1, 2,     0, 2, 3,     // kotak 1a
        4, 5, 6,     4, 6, 7,     // kotak 1b
        8, 9, 10,    8, 10, 11,   // kotak 1c
        12, 13, 14,  12, 14, 15,  // kotak 1d
        16, 17, 18,  16, 18, 19,  // kotak 1e
        20, 21, 22,  20, 22, 23,  // kotak 1f    
        24, 25, 26,  24, 26, 27,    // kotak 2a
        28, 29, 30,  28, 30, 31,    // kotak 2b
        32, 33, 34,  32, 34, 35,    // kotak 2c
        36, 37, 38,  36, 38, 39,    //kotak 2d
        40, 41, 42,  40, 42, 43, //kotak 2e
        44, 45, 46,  44, 46, 47, //kotak 3a
        48, 49, 50,  48, 50, 51, //kotak 3b
        52, 53, 54,  52, 54, 55, //kotak 3c
        56, 57, 58,  56, 58, 59, //kotak 3d
        60, 61, 62,  60, 62, 63, //kotak 4a
        64, 65, 66,  64, 66, 67, //kotak 4b
        68, 69, 70,  68, 70, 71, //kotak 4c
        72, 73, 74,  72, 74, 75, //kotak 4d
        76, 77, 78,  76, 78, 79, //kotak 5a
        80, 81, 82,  80, 82, 83, //kotak 5b
        84, 85, 86, 84, 86, 87,
        
        88, 89, 90, 88, 90, 91, //kotak 5e
        92, 93, 94,  92, 94, 95, //kotak 5f
        96, 97, 98,96, 98, 99, //kotak 4c
        100, 101, 102, 100, 102, 103, //kotak 4c
        104, 105, 106, 104, 106, 107, //kotak 4c
        108, 109, 110, 108, 110, 111, //kotak 4c
        112, 113, 114, 112, 114, 115, //kotak 4c
        116, 117, 118, 116, 118, 119, //kotak 4c
        120,121,122, 120,122,123,

        124,125,126, 124,126,127,
        128,129,130, 128,130,131,
        132,133,134, 132,134,135,
        136,137,138, 136,138,139,
        140,141,142, 140,142,143,
        144,145,146, 144,146,147,
        148,149,150, 148,150,151,
        
        152,153,154, 152,154,155,
        156,157,158, 156,158,159,
        160,161,162, 160,162,163,
        164,165,166, 164,166,167,
        168,169,170, 168,170,171,
        172,173,174, 172,174,175,
        176,177,178, 176,178,179,

        180,181,182, 180, 182,183,
        184,185,186, 184,186,187,
        188,189,190, 188, 190,191,
        192,193,194, 192,194,195,
        196,197,198, 196,198,199,

        200,201,202, 200,202,203,
        204,205,206, 204,206,207,
        208,209,210, 208,210,211,
        212,213,214, 212,214,215,

        216,217,218, 216,218,219,
        220,221,222, 220,222,223,
        224,225,226, 224,226,227,
        228,229,230, 228,230,231,

        232,233,234, 232,234,235,
        236,237,238, 236,238,239,
        240,241,242, 240,242,243,
        244,245,246, 244,246,247,

        248,249,250, 248,250,251,
        252,253,254, 252,254,255,
        256,257,258, 256,258,259,
        260,261,262, 260,262,263,
        264,265,266, 264, 266,267,
        268,269,270, 268,270,271,
        272,273,274, 272,274,275,
        276,277,278, 276,278,279,
        280,281,282, 280,282,283,
        284,285,286, 284,286,287,
        288,289,290, 288,290,291,
        292,293,294, 292,294,295,
        296,297,298, 296,298,299,
        300,301,302, 300,302,303,
        304,305,306, 304,306,307,
        308,309,310, 308,310,311,
        312,313,314, 312,314,315,
        316,317,318, 316,318,319,
        320,321,322, 320,322,323,

        324,325,326, 324,326,327,
        328,329,330, 328,330,331,
        332,333,334, 332,334,335,
        336,337,338, 336,338,339,
        340,341,342, 340,342,343,
        344,345,346, 344,346,347,

        




          









    ];

    // Create a linked-list for storing the vertices data in the GPU realm
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute vec3 aNormal;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        varying vec3 vPosition;
        varying vec3 vColor;
        varying vec3 vNormal;
        void main () {
            vec4 position = vec4(aPosition, 1.0);
            gl_Position = uProjection * uView * uModel * position;
            // gl_Position is the final destination for storing
            //  positional data for the rendered vertex
            vColor = aColor;
            vNormal = aNormal;
            vPosition = (uModel * position).xyz;
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // FRAGMENT SHADER
    var fragmentShaderCode = `
        precision mediump float;
        varying vec3 vColor;
        uniform vec3 uLightConstant;      
        uniform float uAmbientIntensity; 
        varying vec3 vPosition;
        varying vec3 vNormal;
        uniform vec3 uLightPosition;
        uniform vec3 uViewerPosition;
        uniform mat3 uNormalModel;
        void main() {
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightDirection = uLightPosition - vPosition;
            vec3 normalizedLight = normalize(lightDirection);
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0.0, 0.0, 0.0);
            if (cosTheta > 0.0) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            vec3 normalizedReflector = normalize(reflect(-lightDirection, normalizedNormal));
            vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
            float cosPhi = dot(normalizedReflector, normalizedViewer);
            vec3 specular = vec3(0., 0., 0.);
            if (cosPhi > 0.) {
                float shininessConstant = 100.0;    // bare minimum spec for metal
                float specularIntensity = pow(cosPhi, shininessConstant);
                specular = uLightConstant * specularIntensity;
            }
            vec3 phong = ambient + diffuse + specular;
            gl_FragColor = vec4(phong * vColor, 1.0);
            // gl_FragColor is the final destination for storing
            //  color data for the rendered fragment
        }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    // Comparing to C-Programming, we may imagine
    //  that up to this step we have created two
    //  object files (.o), for the vertex and fragment shaders

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // Local variables
    var isAnimated = false;
    var theta = 0.0;
    var direction = "";
    var dX = 0.01;
    var dY = 0.01;
    // For the model (all linear transformation)
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");

    // For the camera
    var camera = [1.0, 0.0, 7.5]; //7.5 unit from the origin outwards the screen
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = glMatrix.mat4.create();  // Create an identity matrix
    glMatrix.mat4.lookAt(
        view,
        camera,
        [camera[0], 5.0, -10.0],
        [-10.0, 10.0, 10.0]
    );
    gl.uniformMatrix4fv(uView, false, view);

    // For the projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
        perspective,
        ((Math.PI / 2) - 15),  //75 degrees of camera 
        1.0,
        0.5,
        50.0
    );
    gl.uniformMatrix4fv(uProjection, false, perspective);

    // For the lighting and shading
    var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
    // Ambient
    var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
    gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // white color
    gl.uniform1f(uAmbientIntensity, 0.142);             // 60% intensity
    // Diffuse
    var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
    gl.uniform3fv(uLightPosition, [-1.0, -1.0, -2.0]);
    var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
    // Specular
    var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");

    // Local functions
    // MOUSE
    var dragging, prevx, prevy, rotation = glMatrix.mat4.create();
    function onMouseDown(event) {
        var x = event.clientX;
        var y = event.clientY;
        var rect = event.target.getBoundingClientRect();
        if (
            rect.left <= x &&
            rect.right >= x &&
            rect.top <= y &&
            rect.bottom >= y
        ) {
            dragging = true;
            prevx = x;
            prevy = y;
        }
    }
    function onMouseUp(event) {
        dragging = false;
    }
    function onMouseMove(event) {
        if (dragging) {
            var x = event.clientX;
            var y = event.clientY;
            var xdiff = x - prevx;
            var ydiff = y - prevy;
            var inverseRotation = glMatrix.mat4.create();
            glMatrix.mat4.invert(inverseRotation, rotation);
            var xAxis = [1, 0, 0, 0];
            var yAxis = [0, 1, 0, 0];
            glMatrix.vec4.transformMat4(xAxis, xAxis, inverseRotation);
            glMatrix.vec4.transformMat4(yAxis, yAxis, inverseRotation);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(xdiff), yAxis);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(ydiff), xAxis);
            prevx = x;
            prevy = y;
        }
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);

    // KEYBOARD or even for changing the camera location
    function onKeyDown(event) {
        switch (event.keyCode) {
            case 87: // Object UP
                direction = "up";
                break;
            case 83: // Object DOWN
                direction = "down";
                break;
            case 68: // Object RIGHT
                direction = "right";
                break;
            case 65: // Object LEFT
                direction = "left";
                break;
            case 38: // Camera UP
                camera[1] += 1;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 40: // Camera DOWN
                camera[1] -= 1;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 39: // Camera RIGHT
                camera[0] += 1;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 37: // Camera LEFT
                camera[0] -= 1;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            default:
                break;
        }
    }
    function onKeyUp(event) {
        direction = "back";
    }
    function onKeyPress(event) {
        console.log('keypress');
        if (event.keyCode == 32) {  // Space button
            isAnimated = !isAnimated;
        }
    }
    document.addEventListener("keypress", onKeyPress)
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    // Teach the GPU how to collect
    //  the positional values from ARRAY_BUFFER
    //  for each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        3,
        gl.FLOAT,
        false,
        9 * Float32Array.BYTES_PER_ELEMENT,
        0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        9 * Float32Array.BYTES_PER_ELEMENT,
        3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
    var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
    gl.vertexAttribPointer(
        aNormal,
        3,
        gl.FLOAT,
        false,
        9 * Float32Array.BYTES_PER_ELEMENT,
        6 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aNormal);

    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        var model = glMatrix.mat4.create();
        if (isAnimated) {
            theta += 0.00001;
        }
        switch (direction) {
            case "up":
                dY += 0.1;
                break;
            case "down":
                dY -= 0.1;
                break;
            case "left":
                dX -= 0.1;
                break;
            case "right":
                dX += 0.1;
                break;

            default:
                break;
        }
        glMatrix.mat4.translate(model, model, [dX, dY, 0.0]);
        glMatrix.mat4.rotateZ(rotation, rotation, theta);
        glMatrix.mat4.rotateY(rotation, rotation, theta);
        glMatrix.mat4.multiply(model, model, rotation);
        gl.uniformMatrix4fv(uModel, false, model);

        // For transforming the normal vector
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

        gl.drawElements(gl.TRIANGLES, indices.length,
            gl.UNSIGNED_SHORT, 0);
        requestAnimationFrame(render);

    }
    requestAnimationFrame(render);
}