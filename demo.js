function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }

  var result = 1;

  for (  let i = 0; i < n; i++ ) {
    result *= x;
  }

  return result;
}

function pow(x, n  ) {
   if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }
``
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

`${result} is good`