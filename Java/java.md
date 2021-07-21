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
say we have a directiory 'root', and we have a class packaged 'com.eugland.code' and class Employee to an output folder out/production/Java
```bash
$javac ./src/com/eugland/code/Employee.java -d out/production/Java/
$java ./out/production/Java/com/eugland/code/Employee.class
```
To package all classes
```bash
$jar --create --verbose --file ./com/eugland/code/*.class
$jar -c -v -f ./com/eugland/code/*.class
$jar -cvf program.jar ./com/eugland/code/*.class

# to run
$java -jar program.jar

# To create documentation
javadoc -d ...
```

## Class Path
Say you want to use downloaded jar, and you can do this: 

```bash
$java -cp .;..\libs\lib1.jar;..\libs\lib2.jar com.mycompany.MainClass

# or export
$SET ClASSPATH=.;C:\Users\username\project\libs\*
```


## Nested Class 
- Static class is no different than another class
- Private static makes it only avaliable to its containing class
- Non-static inner class is aware of its owner 

```Java
import java.util.ArrayList;
import java.util.List;

public class Outter {
    private List<Inner> inners;

    public Outter() {
        inners = new ArrayList<Inner>();
    }

    public Inner enrol(String name) {
        Inner i = new Inner(name);
        // same as 
        Inner i = this.new Inner(name);
        inners.add(i);
        return i;
    }


    public class Inner {
        String name;

        public Inner(String name) {
            this.name = name;
        }

        public void deactivate() {
            // notice how the inner class method has access to a private instance variable of the outer class
            inners.remove(this); 
            // same as: 
            Outer.this.inners.remove(this);
        }

    }

    public static void main(String[] args) {
        Outter o1 = new Outter();
        Outter.Inner fred = o1.enrol("fred");
        System.out.println(o1.inners);
        fred.deactivate();
        System.out.println(o1.inners);
    }
}

```
## Conflicting method
- say 2 interfaces A B have the same method, one is implemented 
```java
getshit() {
    return B.super.getshit();
}
```
- if both unimplemmented, then DIY
- If both implemented do as above but choose, the java isnt smart enought to choose for you.
- If from a top class and a interface, then the top class is what matters


## Inteferace
create them to execute tasks 

## Lambda and Method Reference
lambda are objects, and can be passed in functional interfaces. Method references and Constructor references are just cool

```Java
(String a, String b) -> a.length()-b.length()
Stream<Employee> stream = names.stream().map(
Employee::new);
Employee[] buttons = stream.toArray(Employee[]::new);
```

Example of using method reference or simple lambda expression 
```Java
public class Lambda {
    public static void main(String[] args) {
        Comparator<String> stringComparator = (String a, String b) -> a.length() - b.length();
        Map<String, String> a = new HashMap<>();
        List<Pair> namePair =List.of(new Pair("a","a"), new Pair("b", "b"));
        Stream<Empl> emplStream = namePair.stream().map((i) -> new Empl(i.a, i.b));
        emplStream = namePair.stream().map(Empl::new);
    }

    static class Empl {
        String name;
        String spouse;
        Empl(String a, String b){
            name = a;
            spouse = b;
        }
        Empl(Pair pair){
            name = pair.a;
            spouse = pair.b;
        }
    }
    
    static class Pair {
        String a;
        String b;
        Pair(String c,String d) {
            a=c;
            b=d;
        }

    }
}
```

## Closure 
- lambda expression can capture outof its scope variable but only for none changing ones.


## Comparing
people with the same last name:
```Java
Arrays.sort(people, Comparator
.comparing(Person::getLastName)
.thenComparing(Person::getFirstName));

Arrays.sort(people, Comparator.comparing(Person::getLastName,
(s, t) -> s.length() - t.length()));
```

## Annonymous Class 
```Java
public class Loop {

    public static void main(String[] args) {
        Loop loop = new Loop();
        loop.adequate("haha");
    }

    public void adequate(String content) {
        class Annon {
            void out(){
                System.out.println(content);
            }
        }
        Annon a = new Annon();
        a.out();
    }
}
```


## Reflection Baby 
How you can create an object from a non-predetermined class
```Java
public class ForNa {
    public String tag = "shit";

    public static void main(String[] args)
            throws ClassNotFoundException,
            InstantiationException,
            IllegalAccessException {
        Class<?> cls = Class.forName("ForNa");
        ForNa i = (ForNa) cls.newInstance();
        i.tag = "nope";
        System.out.println(i.tag);
    }

}
```
## Modify any object by a known var: 
```Java
Field f = obj.getClass().getDeclaredField("salary");
f.setAccessible(true);
double value = f.getDouble(obj);
f.setDouble(obj, value * 1.1);
```

## Method
```Java
Person p = ...;
Method m = p.getClass().getMethod("setName", String.class);
m.invoke(obj, "********");
```

## Using Stream Class
```Java
import java.math.BigInteger;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Strea {
    static class Tempa {
        int n;
        Tempa(int o) {
            n = o;
        }

        @Override
        public String toString() {
            return "Tempa{" +
                    "n=" + n +
                    '}';
        }
    }
    public static void main(String[] args) {
        int[] num = {1,2,3,4,5,6,7,8,9,10};
        List<Tempa> tempa = Arrays.stream(num).mapToObj(a -> new Tempa(a)).toList();
        System.out.println(tempa);
        List<Integer> li = Stream.iterate(1, n-> n < 10, n -> n+1).collect(Collectors.toList());
        System.out.println(li);

        String filteredNum = Stream.of("1", "2", "s", "3").takeWhile(s->"123456".contains(s)).collect(Collectors.joining());
        System.out.println(filteredNum);

        var liOfWords = new Scanner("asdas add adgdjk mfklsjviogner asmdfsd").tokens().toList();
        System.out.println(liOfWords);

        List<String> words = List.of("a", "b1", "cc3", "ddd4", "eeee5" );
        List<String> longestFirst = words.stream().sorted(Comparator.comparing(String::length).reversed()).toList();
        System.out.println(longestFirst);
    }
}





```