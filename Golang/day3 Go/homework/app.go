package main

import (
	"fmt"
	"math/rand"
	"time"
)

type Product struct {
	Name     string
	Category string
	Price    int
}

func randomInt(min int, max int) int {
	return rand.Intn(max-min+1) + min
}

// func showList() string {

// }

func main() {
	category := [4]string{"fashion", "electronics", "sport", "food"}
	products := [20]Product{} // print 20 products
	rand.Seed(time.Now().UnixNano())
	for i := 0; i < len(products); i++ {
		products[i] = Product{
			fmt.Sprintf("%s %d", "Product", i),
			category[rand.Intn(len(category))],
			randomInt(100, 200),
		}
	}

	// 	Tạo danh sách 20 sản phẩm (code đã có sẵn)
	for _, product := range products {
		fmt.Println(product)
	}

	// Gõ vào từ bàn phím tên một sản phẩm, trả về danh sách tìm được
	fmt.Println("Enter name: ")
	var searchByName string
	fmt.Scanln(&searchByName)
	for _, product := range products {
		if product.Name == searchByName {
			fmt.Println(product)
		}
	}

	// Gõ vào category, trả về danh sách tất cả các sản phẩm trong category đó
	fmt.Println("Enter Category: ")
	var searchByCategory string
	fmt.Scanln(&searchByCategory)
	for _, product := range products {
		if product.Category == searchByCategory {
			fmt.Println(product)
		}
	}
	// Gõ vào price min, và price max, tìm tất cả các sản phẩm có giá trong dải min đến max
	var min int
	var max int
	fmt.Println("Enter min value: ")
	fmt.Scanln(&min)
	fmt.Println("Enter max value: ")
	fmt.Scanln(&max)
	for _, product := range products {
		if product.Price >= min && product.Price <= max{
			fmt.Println(product)
		}
	}
}
