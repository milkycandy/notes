# 认识STM32L476RG
在开始之前，让我们先来了解一下这颗芯片。

先看一下STM32的命名规则：

![STM32命名规则](../res/images/STM32命名规则.png)

根据这张图可知，这颗MCU：

- **STM32家族**
- **超低功耗（L）**
- **L4系列（基于 Cortex-M4 核心）**
- **功能丰富、外设齐全的高端型号（76）**
- **LQFP-64封装（R）**
- **内置 1 MB 闪存（G）**

超低功耗是L476最大的特点，它比较适合电池供电的设备。

这里有一份完整的特性清单：
::: details STM32L476RGT6的具体特性
- STM32L476RGT6 in LQFP64 package  
- ARM®32-bit Cortex®-M4 CPU  
- Adaptive real-time accelerator (ART Accelerator™) allowing 0-wait state execution from Flash memory  
- 80 MHz max CPU frequency  
- VDD from 1.71 V to 3.6 V  
- 1 MB Flash  
- 128 KB SRAM  
- random generator (TRNG for HW entropy)  
- Quad SPI (1)  
- Timers General Purpose (7)  
- Timers Advanced-Control (2)  
- Timers Basic (2)  
- Timers LowPower (2)  
- Systick  
- Watchdog (2)  
- SPI (3)  
- I2C (3)  
- USART (3)  
- UART (2)  
- LPUART (1)  
- USB OTG Full Speed  
- CAN (1)  
- SAI (2)  
- SDMMC  
- SWPMI  
- LCD 8x28 or 4x32  
- GPIO (51) with external interrupt capability  
- Capacitive sensing with 12 channels  
- 12-bit ADC (3) with 16 channels  
- 12-bit DAC with 2 channels  
- Analog comparator (2)  
- Opamp (2)

:::

