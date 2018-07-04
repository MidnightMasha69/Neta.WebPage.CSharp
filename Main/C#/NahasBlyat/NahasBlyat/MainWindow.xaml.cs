using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace NahasBlyat
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Nahas1.Visibility = Visibility.Visible;
            Nahas2.Visibility = Visibility.Hidden;
            Nahas4.Visibility = Visibility.Hidden;
            Nahas5.Visibility = Visibility.Hidden;
            Nahas3.Visibility = Visibility.Hidden;
            About.Visibility = Visibility.Hidden;
        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            Nahas2.Visibility = Visibility.Visible;
            Nahas4.Visibility = Visibility.Hidden;
            Nahas1.Visibility = Visibility.Hidden;
            Nahas5.Visibility = Visibility.Hidden;
            Nahas3.Visibility = Visibility.Hidden;
            About.Visibility = Visibility.Hidden;
        }

        private void Button_Click_2(object sender, RoutedEventArgs e)
        {
            Nahas4.Visibility = Visibility.Hidden;
            Nahas2.Visibility = Visibility.Hidden;
            Nahas1.Visibility = Visibility.Hidden;
            Nahas5.Visibility = Visibility.Hidden;
            Nahas3.Visibility = Visibility.Visible;
            About.Visibility = Visibility.Hidden;
        }

        private void Button_Click_3(object sender, RoutedEventArgs e)
        {
            Nahas2.Visibility = Visibility.Hidden;
            Nahas1.Visibility = Visibility.Hidden;
            Nahas3.Visibility = Visibility.Hidden;
            Nahas5.Visibility = Visibility.Hidden;
            Nahas4.Visibility = Visibility.Visible;
            About.Visibility = Visibility.Hidden;
        }

        private void Button_Click_4(object sender, RoutedEventArgs e)
        {
            Nahas2.Visibility = Visibility.Hidden;
            Nahas1.Visibility = Visibility.Hidden;
            Nahas3.Visibility = Visibility.Hidden;
            Nahas4.Visibility = Visibility.Hidden;
            Nahas5.Visibility = Visibility.Visible;
            About.Visibility = Visibility.Hidden;
        }

        private void Button_Click_5(object sender, RoutedEventArgs e)
        {
            Nahas2.Visibility = Visibility.Hidden;
            Nahas1.Visibility = Visibility.Hidden;
            Nahas3.Visibility = Visibility.Hidden;
            Nahas4.Visibility = Visibility.Hidden;
            Nahas5.Visibility = Visibility.Hidden;
            About.Visibility = Visibility.Visible;
        }
    }
}
