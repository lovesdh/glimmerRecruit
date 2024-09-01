![](https://pic.imgdb.cn/item/64c4a5611ddac507cc058911.png)

# Java07-异常处理

当你写好了代码，IDE检查没有语法错误，仔细检查过没有bug，程序一开始也能正常运行，是否就意味着万事大吉了呢？

当然不是，程序在运行的过程中会遇到很多不确定的情况，比如程序试图打开一个不存在的文件，程序遇到了网络连接问题，程序在运算时把0作为了除数，等等等等。

比如以下代码

```
public class Example {
    public static void main(String[] args) {
        System.out.println(10/0);
        System.out.println("test");
    }
}
```

当程序运行到`System.out.println(10/0)`时就会**抛出**ArithmeticException异常,也不会执行后面的打印语句。

## **Task1.异常Exception和错误Error**

Exception和Error都是Throwable的子类，所以它们才能够被抛出(throw)和捕获(catch)

1. 请举例几个具体的Exception和Error类型以及它们发生的原因，当发生Exception和Error时，程序的处理态度分别应该是什么？

异常Exception也分为cheked和uncheked异常

2. 请举例几个具体的cheked和uncheked异常以及它们发生的原因，这两种类型的异常有什么区别？

## **Task2.异常的处理**

​	对于一段可能抛出异常的代码，程序有两种主要的处理机制，要么用try-catch捕获进行相应处理，要么在方法签名中用throws关键字抛出该异常，让调用该方法的上一层代码进行处理（同样用catch捕获或者再向上一层抛出），如果一个异常一直没有被catch捕获，直到传递到main方法仍未被处理，则会由JVM来终止程序运行。

3. 以下是一个以银行取款为情景的程序，请你说出该程序运行的所有可能流程

   ```
   class InsufficientFundsException extends Exception {
       public InsufficientFundsException(String message) {
           super(message);
       }
   }
   
   class BankAccount {
       private double balance;
   
       public BankAccount(double initialBalance) {
           this.balance = initialBalance;
       }
   
       public double getBalance() {
           return balance;
       }
   
       public void withdraw(double amount) throws InsufficientFundsException {
           if (amount > balance) {
               throw new InsufficientFundsException("余额不足，无法取款。当前余额: " + balance);
           }
           balance -= amount;
       }
   }
   
   public class BankAccountExample {
       public static void main(String[] args) {
           BankAccount account = new BankAccount(Math.random()*200);
   
           try {
               System.out.println("当前余额: " + account.getBalance());
               account.withdraw(150.0);
               System.out.println("取款成功。");
           } catch (InsufficientFundsException e) {
               System.err.println("错误: " + e.getMessage());
           }
   
           System.out.println("程序结束");
       }
   }
   ```

4. 题目：文件读取与数据处理

   编写一个Java程序，要求完成以下功能：

   1. 读取文件: 在当前目录下，从一个文本文件中读取内容。假设文件名为`data.txt`，其中每一行包含一个整数。

   2. 数据处理: 计算这些整数的平均值。

   3. 异常处理
      - 如果文件不存在，抛出自定义异常`FileNotFoundException`，提示文件未找到。
      - 如果文件为空，抛出自定义异常`EmptyFileException`，提示文件为空。
      - 如果文件中包含无法解析为整数的内容，捕获`NumberFormatException`，并提示读取到的内容格式错误。
      - 最后，使用`finally`块确保文件资源被正确关闭。

   要求：
   - 创建自定义异常类`EmptyFileException`。
   - 使用`try-with-resources`语句或者`finally`语句来管理文件的读取。
   - 捕获并处理可能发生的所有异常，并给出相应的提示信息。

   提示：
   - 使用`BufferedReader`来读取文件内容。
   - 计算平均值时，可以在读取数据的同时进行累计和计数。


出题人QQ:2575824162




