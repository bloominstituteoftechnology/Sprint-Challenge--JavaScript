package main

import "fmt"

type geometry interface {
	volume() int
	surfaceArea() int
}

type cuboid struct {
	length, width, height int
}

type cube struct {
	length, width, height int
}

func (cd cuboid) volume() int {
	return cd.length * cd.width * cd.height
}

func (cd cuboid) surfaceArea() int {
	return 2 * ((cd.length * cd.width) + (cd.length * cd.height) + (cd.width * cd.height))
}

func (c cube) volume() int {
	return c.length * c.width * c.height
}

func (c cube) surfaceArea() int {
	return 6 * (c.length * c.width)
}

func measure(g geometry) {
	fmt.Println(g)
	fmt.Println(g.volume())
	fmt.Println(g.surfaceArea())
}
func main() {
	cd := cuboid{length: 4, width: 5, height: 5}
	c := cube{length: 10, width: 10, height: 10}

	measure(cd) // 100 and 130
	measure(c)  // 1000 and 600
}
