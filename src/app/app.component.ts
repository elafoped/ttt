import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // استيراد FormsModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,  // الخاصية standalone
  imports: [CommonModule, FormsModule]  // إضافة FormsModule هنا
})
export class AppComponent {
  
  employees = [
    { name: 'John Doe', position: 'Manager', department: 'Sales', email: 'john@example.com' },
    { name: 'Jane Smith', position: 'Developer', department: 'IT', email: 'jane@example.com' }
  ];

  newEmployee = { name: '', position: '', department: '', email: '' }; // النموذج الفارغ
  editMode = false; // لمعرفة إذا كان المستخدم في وضع التعديل
  currentIndex: number | null = null; // لتخزين فهرس الموظف الجاري تعديله

  // الوظيفة لإضافة الموظف
  addEmployee() {
    if (this.editMode && this.currentIndex !== null) {
      this.employees[this.currentIndex] = { ...this.newEmployee }; // تعديل الموظف
    } else {
      this.employees.push({ ...this.newEmployee }); // إضافة موظف جديد
    }
    this.resetForm();
  }

  // الوظيفة لحذف الموظف
  deleteEmployee(index: number) {
    this.employees.splice(index, 1); // حذف الموظف من القائمة
  }

  // الوظيفة لتعديل الموظف
  editEmployee(employee: any, index: number) {
    this.newEmployee = { ...employee }; // نسخ بيانات الموظف إلى النموذج
    this.editMode = true; // تفعيل وضع التعديل
    this.currentIndex = index; // تخزين الفهرس لتعديله لاحقًا
  }

  // لإعادة تعيين النموذج بعد إضافة أو تعديل الموظف
  resetForm() {
    this.newEmployee = { name: '', position: '', department: '', email: '' };
    this.editMode = false;
    this.currentIndex = null;
  }
}
