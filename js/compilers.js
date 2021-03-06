// Generated by CoffeeScript 1.10.0
(function() {
  this.COMPILERS = [
    {
      name: 'Haxe ActionScript Compiler',
      source: 'Haxe',
      target: 'ActionScript',
      type: 'Transpiler'
    }, {
      name: 'Haxe C# Compiler',
      source: 'Haxe',
      target: 'C#',
      type: 'Transpiler'
    }, {
      name: 'Haxe C++ Compiler',
      source: 'Haxe',
      target: 'C++',
      type: 'Transpiler'
    }, {
      name: 'Haxe Java Compiler',
      source: 'Haxe',
      target: 'Java',
      type: 'Transpiler'
    }, {
      name: 'Haxe Lua Compiler',
      source: 'Haxe',
      target: 'Lua',
      type: 'Transpiler'
    }, {
      name: 'Haxe PHP Compiler',
      source: 'Haxe',
      target: 'PHP',
      type: 'Transpiler'
    }, {
      name: 'Haxe Python Compiler',
      source: 'Haxe',
      target: 'Python',
      type: 'Transpiler'
    }, {
      name: 'Js2Py',
      source: 'JavaScript',
      target: 'Python',
      type: 'Transpiler'
    }, {
      name: 'Bridge.NET',
      source: 'C#',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'Brython',
      source: 'Python',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'BuckleScript',
      source: 'OCaml',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'Ceylon JavaScript Compiler',
      source: 'Ceylon',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'ClojureScript',
      source: 'Clojure',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'CoffeeScript Compiler',
      source: 'CoffeeScript',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'Dart-to-JavaScript Compiler',
      source: 'Dart',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'Elm Compiler',
      source: 'Elm',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'Emscripten',
      source: 'LLVM IR',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'Fable',
      source: 'F#',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'GHCJS',
      source: 'Haskell',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'GopherJS',
      source: 'Go',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'Haxe JavaScript Compiler',
      source: 'Haxe',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'JSIL',
      source: 'CIL',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'JSweet',
      source: 'Java',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'Kotlin JavaScript Compiler',
      source: 'Kotlin',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'Scala.js',
      source: 'Scala',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'TeaVM',
      source: 'Java Bytecode',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'Transcrypt',
      source: 'Python',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'TypeScript Compiler',
      source: 'TypeScript',
      target: 'JavaScript',
      type: 'Transpiler'
    }, {
      name: 'Clang C Compiler',
      source: 'C',
      target: 'LLVM IR',
      type: 'Intermediate'
    }, {
      name: 'Clang C++ Compiler',
      source: 'C++',
      target: 'LLVM IR',
      type: 'Intermediate'
    }, {
      name: 'Clang Objective-C Compiler',
      source: 'Objective-C',
      target: 'LLVM IR',
      type: 'Intermediate'
    }, {
      name: 'LDC',
      source: 'D',
      target: 'LLVM IR',
      type: 'Intermediate'
    }, {
      name: 'Nim Compiler',
      source: 'Nim',
      target: 'C',
      type: 'Intermediate'
    }, {
      name: 'Rust Compiler',
      source: 'Rust',
      target: 'LLVM IR',
      type: 'Intermediate'
    }, {
      name: 'Swift Compiler',
      source: 'Swift',
      target: 'LLVM IR',
      type: 'Intermediate'
    }, {
      name: 'IronPython',
      source: 'Python',
      target: 'CIL',
      type: 'Intermediate'
    }, {
      name: 'Roslyn',
      source: 'C#',
      target: 'CIL',
      type: 'Intermediate'
    }, {
      name: 'Visual F#',
      source: 'F#',
      target: 'CIL',
      type: 'Intermediate'
    }, {
      name: 'Ceylon Compiler',
      source: 'Ceylon',
      target: 'Java Bytecode',
      type: 'Intermediate'
    }, {
      name: 'Clojure Compiler',
      source: 'Clojure',
      target: 'Java Bytecode',
      type: 'Intermediate'
    }, {
      name: 'Groovy Compiler',
      source: 'Groovy',
      target: 'Java Bytecode',
      type: 'Intermediate'
    }, {
      name: 'Java Compiler',
      source: 'Java',
      target: 'Java Bytecode',
      type: 'Intermediate'
    }, {
      name: 'Jython',
      source: 'Python',
      target: 'Java Bytecode',
      type: 'Intermediate'
    }, {
      name: 'Kotlin Compiler',
      source: 'Kotlin',
      target: 'Java Bytecode',
      type: 'Intermediate'
    }, {
      name: 'Scala Compiler',
      source: 'Scala',
      target: 'Java Bytecode',
      type: 'Intermediate'
    }, {
      name: 'DMD',
      source: 'D',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'FreeBASIC',
      source: 'BASIC',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'Free Pascal',
      source: 'Pascal',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'GCC',
      source: 'C',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'GFortran',
      source: 'Fortran',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'GHC',
      source: 'Haskell',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'GNAT',
      source: 'Ada',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'Go Compiler',
      source: 'Go',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'G++',
      source: 'C++',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'Intel C',
      source: 'C',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'Intel C++',
      source: 'C++',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'LLVM',
      source: 'LLVM IR',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'OCaml Compiler',
      source: 'OCaml',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'Visual C',
      source: 'C',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'Visual C++',
      source: 'C++',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'CLR',
      source: 'CIL',
      target: 'Machine Code',
      type: 'JIT'
    }, {
      name: 'HHVM Hack',
      source: 'Hack',
      target: 'Machine Code',
      type: 'JIT'
    }, {
      name: 'HHVM PHP',
      source: 'PHP',
      target: 'Machine Code',
      type: 'JIT'
    }, {
      name: 'JVM',
      source: 'Java Bytecode',
      target: 'Machine Code',
      type: 'JIT'
    }, {
      name: 'LuaJIT',
      source: 'Lua',
      target: 'Machine Code',
      type: 'JIT'
    }, {
      name: 'PyPy',
      source: 'Python',
      target: 'Machine Code',
      type: 'JIT'
    }, {
      name: 'V8',
      source: 'JavaScript',
      target: 'Machine Code',
      type: 'JIT'
    }, {
      name: 'MASM',
      source: 'Assembly',
      target: 'Machine Code',
      type: 'Assembler'
    }, {
      name: 'NASM',
      source: 'Assembly',
      target: 'Machine Code',
      type: 'Assembler'
    }, {
      name: 'Moonscript compiler',
      source: 'MoonScript',
      target: 'Lua',
      type: 'Transpiler'
    }, {
      name: 'LLVM llc',
      source: 'LLVM IR',
      target: 'C',
      type: 'Transpiler'
    }, {
      name: 'Mono',
      source: 'C#',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'GNU Pascal',
      source: 'Pascal',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'Julia compiler',
      source: 'Julia',
      target: 'Machine Code',
      type: 'Native'
    }, {
      name: 'Dart VM',
      source: 'Dart',
      target: 'Native Code',
      type: 'JIT'
    }
  ];

}).call(this);
