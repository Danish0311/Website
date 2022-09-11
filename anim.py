def cbrt(x):
  '''
  Returns the real cube root of x
  
  cbrt: Float -> Float
  
  Examples:
     cbrt(0.0) => 0.0
     cbrt(-8) => -2.0
  '''
  sign = math.copysign(1.0, x)
  return sign*(sign*x)**(1/3)

def cardano(p, q):
  '''
  Returns the root of the polynomial of the form of f(x) = x^3 + px + q using
  Cardano's Formula
  
  cardano: Float Float -> Float
  
  Examples:
     cardano(0.0, 205069.0) => -58.97030009549668
     cardano(5.0, 2.5) => -0.47813800497942904
  '''
  term_1 = (-1 * (q / 2))
  term_2 = math.sqrt(((q**2) / 4) + ((p**3) / 27))
  root = cbrt(term_1 + term_2) + cbrt(term_1 - term_2)
  return root
  pass