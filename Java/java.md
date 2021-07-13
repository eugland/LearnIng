# Java Learning Notes
## Intro

```java
Double.isNaN(a)
Double.POSITIVE_INFINITY
Double.NEGATIVE_INFINITY
Integer.MAX_VALUE
Integer.MIN_VALUE

for (int i = 0; i < 8; i++) {
    Math.floorMod(i, 4);
}
`01230123`


public strictfp class Floater; // to enforce strict floating point
```java

To iterate in non-asci characters, do this: 
```java
String s = "数清楚codepoint";
        for (int i = 0; i < s.length();) {
            int j = s.offsetByCodePoints(i,1);
            String ne = s.substring(i, j);
            System.out.print(ne + " ");
            i = j;
        }
```
result is `数 清 楚 c o d e p o i n t `

To exist an outer Loop, use break label:
```java
outer:
while (true) {
    System.out.println("Running");
    while (true) {
        System.out.println("\tSubrunning");
        break outer;
    }
}
```

## Arrays 
```java
Arrays.asList(T ...a)
List.of(T...a)
ArrayList<Integer> b = new ArrayList(List.of(1,2,3,4));
List<Integer> a = Arrays.asList(1,2,3,4);


String[] temp = {"1","2","3","4"};
String[] copied = Arrays.copyOf(temp, temp.length);
```

## Print Array
```java
int[] o = {1,2,3};
System.out.println(Arrays.toString(o));

List<Integer> l = List.of(1,2,3);
System.out.println(l);

Collections.sort(arr);
Collections.shuffle(arr);
```

## Reference not Altered
```java
public class Employee {
    public String name;
    public Employee(String name) {
        this.name = name;
    }

    public static void replace(Employee e) {
        e = new Employee("Zom");
    }

    public static void main(String[] args) {
        Employee e = new Employee("Bob");
        replace(e);
        System.out.println(e.name);
    }
}

```
output : bob


## To Build and run Java
say we have a directiory 'root', and we have a class packaged ''
```bash


```







